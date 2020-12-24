import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react"
import LoadingModal from "../loadingModal"
import Heading from "../heading"
import "./index.css"
import usePyodide from "./usePyodide"
import classNames from "../../utils/classNames"

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
            className="form-input block w-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
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

  const callback = parsed => {
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

  const newUserInput = content => {
    runPython(`parse("${content}")`)
  }

  const parsedOutput = parsed => {
    console.log(parsed)
    addParse(parsed)
    forceUpdate()
  }

  const reloadGlobals = () => {
    attachGlobal({})
    runPython(`from js import demo`)
    runPython(`exec(demo)`)
  }

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
                    {parses.length === 0 ? (
                      <div className="text-gray-500 text-center text-sm">
                        Enter Latin text to get started ↑
                      </div>
                    ) : (
                      parses.map((parse, i) => (
                        <div
                          className="rounded-lg bg-white shadow-lg border border-gray-400 p-2 m-4 my-4 text-left"
                          key={i}
                        >
                        {parse.map((token, j) => (
                          <span key={j} text={token.text} lemma={token.lemma} pos={token.pos}>{token.text} </span>
                        ))}
                        </div>
                      ))
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
