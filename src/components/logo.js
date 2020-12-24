import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import svgLogo from "../images/logo.svg"

const Logo = ({ format = "svg", white = false, className = "" }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        publicURL
      }
      whiteLogo: file(relativePath: { eq: "logo.png" }) {
        publicURL
      }
    }
  `)

  let image

  switch (format) {
    case "svg":
      image = { publicURL: svgLogo }
      break
    case "logo":
    default:
      console.log(data)
      image = white ? data.whiteLogo : data.logo
  }

  return <img src={image.publicURL} alt="Nota Bene Logo" className={className} />
}

Logo.propTypes = {
  format: PropTypes.string,
  white: PropTypes.bool,
  className: PropTypes.string,
}

Logo.defaultProps = {
  format: "svg",
  white: false,
  className: "",
}

export default Logo
