import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react"
import LoadingModal from "../loadingModal"
import {Heading, SubHeading} from "../heading"
import "./index.css"
import usePyodide from "./usePyodide"
import classNames from "../../utils/classNames"

const posToColor = {
  "verb": "red",
  "noun": "blue",
  "adj": "green"
}

const Token = ({token, index, send, selectedIndex}) => {
  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])

  const [bgColor, setBgColor] = useState("")

  const tokenClick = () => {
    setBgColor(posToColor[token.pos])
    send(token, index)
    forceUpdate()
  }

  return (
    <span key={"wrap" + index}>
      <span
        key={index}
        className={classNames(
          "cursor-pointer",
          selectedIndex === index
            ? "rounded-lg bg-" + bgColor + "-300 p-1 pl-2 pr-2"
            : ""
        )}
        onClick={tokenClick}
      >
        {token.text}
      </span>
      {" "}
    </span>
  )

}

const TextBox = ({send}) => {
  const [textInput, setTextInput] = useState("")

  const sendTextInput = () => {
    send(textInput)
    setTextInput("")
  }

  return (
    <div className="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex-grow focus-within:z-10">
          <input
            id="text_input"
            className="form-input block w-full h-full rounded-none rounded-l-md border border-gray-300 pl-3 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            placeholder="Enter Latin text..."
            onChange={event => setTextInput(event.target.value)}
            value={textInput}
            onKeyDown={event => event.key === "Enter" && sendTextInput()}
          />
        </div>
        <button
          className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          onClick={sendTextInput}
        >
          <svg
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="ml-2">Parse</span>
        </button>
      </div>
    </div>
  )
}

const Demo = () => {
  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])

  const [parsing, setParsing] = useState(false)

  const callback = parsed => {
    setParsing(false)
    if (parsed?.length > 0) {
      parsedOutput(parsed)
    }
  }

  const { loading, attachGlobal, runPython, reload } = usePyodide(callback)

  const [parses, addParse] = useReducer((state, parse) => {
    if (parse && state && !state.includes(parse)) {
      state.push(parse)
      return state
    }
    return state
  }, [])

  const [selectedIndex, setSelectedIndex] = useState("")
  const newSelectedIndex = (token, index) => {
    setSelectedIndex(index)
    forceUpdate()
  }

  const newUserInput = content => {
    setParsing(true)
    runPython(`parse("${content}")`)
  }

  const parsedOutput = parsed => {
    addParse(parsed)
    forceUpdate()
  }

  const reloadGlobals = () => {
    attachGlobal({})
    runPython(`from js import demo`)
    runPython(`exec(demo)`)
  }

  var selectedToken = (
    selectedIndex !== ""
    ? parses[selectedIndex.split(",")[0]][selectedIndex.split(",")[1]]
    : ""
  )

  useEffect(() => {
    if (!loading) reloadGlobals()
  }, [loading])

  return (
    <>
      <div className="bg-gray-900">
        <Heading title="Nota Bene Demo" />
        <div className="mt-8 pb-12 bg-white sm:mt-12 sm:pb-16 lg:pb-24">
          <div className="relative">
            <div className="absolute inset-0 h-32 bg-gray-900"></div>
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none">
                <div className="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
                  <TextBox send={newUserInput} />
                  <div className="mb-6">
                    {parses.length === 0 && !parsing ? (
                      <div className="text-gray-500 text-center text-sm">
                        Enter Latin text to get started ↑
                      </div>
                    ) : (
                      <div className="grid grid-cols-2">{/* className="flex justify-evenly"> */}
                        <div>
                          {parsing ? (
                            <div className="rounded-lg bg-white shadow-lg border border-gray-400 p-2 m-4 my-4 text-left">
                              <div className="animate-pulse flex space-x-4">
                                <div className="flex-1 space-y-4 py-1">
                                  <div className="h-4 bg-blue-400 rounded w-5/6"></div>
                                  <div className="h-4 bg-blue-400 rounded"></div>
                                  <div className="h-4 bg-blue-400 rounded w-3/4"></div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <></>
                          )}
                          {[...parses].reverse().map((parse, i) => (
                            <div
                              className="rounded-lg bg-white shadow-lg border border-gray-400 p-2 m-4 my-4 text-left"
                              key={i}
                            >
                            {parse.map((token, j) => (
                              <Token token={token} key={j} index={(parses.length - i - 1) + "," + j} send={newSelectedIndex} selectedIndex={selectedIndex} />
                            ))}
                            </div>
                          ))}
                        </div>
                        <div>
                          <div className="rounded-lg bg-white shadow-lg border border-gray-400 p-2 m-4 my-4 text-left">
                            <SubHeading title="Word information" />
                            {selectedToken !== "" ? (
                              <div>
                                <div className="flex justify-between flex-initial">
                                  <p className="rounded-lg p-1 pl-2 pr-2">{selectedToken.text}</p>
                                  <p
                                    className={classNames(
                                      "rounded-lg p-1 pl-2 pr-2 bg-" + posToColor[selectedToken.pos] + "-300"
                                    )}
                                  >
                                    {selectedToken.pos}
                                  </p>
                                </div>
                                <div className="pt-2 pb-4">
                                  {selectedToken.decl} of <i>{selectedToken.lemma}</i>
                                </div>
                                <SubHeading title="Glossary" />
                                <p className="rounded-lg p-1 pl-2 pr-2"><i>{selectedToken.lemma}</i></p>
                                <ol className="list-decimal pl-5">
                                  {selectedToken.gloss.map((entry, i) => (
                                    <li key={i}>{entry}</li>
                                  ))}
                                </ol>
                                {/* <SubHeading title="Translation" /> */}
                              </div>
                            ) : (
                              <p><i>Click on a word to display its lexical and morphological information.</i></p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoadingModal
        loading={loading}
        message={"This demo requires a modern browser."}
      />
    </>
  )
}

export default Demo
