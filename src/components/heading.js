import React from "react"

const Heading = ({ title, subtitle = "" }) => {

  return (
    <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="mx-auto lg:max-w-none">
                <p className="mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
                    {title}
                </p>
                <p className="mt-2 text-xl leading-7 text-gray-300">
                    {subtitle}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Heading
