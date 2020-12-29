import React from "react"
import SEO from "../components/seo"
import {Heading, SubHeading} from "../components/heading"

const Introduction = () => {

  return (
    <div className="relative">
      <div className="absolute inset-0 h-32 bg-gray-900"></div>
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none">
          <div className="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
            <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
              About Nota Bene
            </h3>

            <p className="mt-6 text-base leading-6">
              <i>Nota Bene</i> is an on-going dissertation project at the University of Edinburgh
              to create a comprehensive computer-assisted translator and analyser of the Latin language into English.
              It is intended to analyse Latin's morphological structure as fully and accurately as possible,
              in a user-friendly format, relying on state-of-the-art natural language processing methods
              in the fields of lemmatization, part-of-speech tagging, dependency parsing and translation.
            </p>

            <div className="mt-8">
              <SubHeading title="Contact" outline="left" />
              <br />
              <p>
              For questions about the project, feel free to reach out via
              {" "}
              <a
                href="mailto:s1658172@sms.ed.ac.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                email
              </a>.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />

      <div className="bg-gray-900">
        <Heading title="Nota Bene" subtitle="A computer-assisted translator of Latin to English" />
        <div className="mt-8 pb-12 bg-white sm:mt-12 sm:pb-16 lg:pb-24">
          <Introduction />
        </div>
      </div>
    </>
  )
}

export default IndexPage