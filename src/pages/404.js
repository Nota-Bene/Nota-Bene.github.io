import React from "react"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
            <h1>NOT FOUND</h1>
          </p>
          <p>You just hit a route that doesn&#39;t exist... sorry!</p>
        </div>
      </div>
    </div>
  </>
)

export default NotFoundPage
