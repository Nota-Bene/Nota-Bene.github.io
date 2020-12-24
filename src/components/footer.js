import React from "react"

const Footer = () => {
  const links = [
    {
      label: "GitHub",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
      href: "https://github.com/nota-bene",
    },
    {
      label: "LinkedIn",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 50 512 512">
         <path
            fillRule="evenodd"
            d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683
            C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z
            M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615
            c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915
            s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"
            clipRule="evenodd"
          />
        </svg> 
      ),
      href: "https://www.linkedin.com/in/nina-becx",
    },
    {
      label: "Email",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor" className="mail w-6 h-6">
          <path
            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
          />
          <path
            d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
          />
        </svg>
      ),
      href: "mailto:s1658172@sms.ed.ac.uk",
    },
  ]

  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center md:order-2">
          {links.map(({ label, icon, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 first:ml-0 text-gray-500 hover:text-gray-700"
              key={href}
              title={label}
            >
              <span className="sr-only">{label}</span>
              {icon}
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base leading-6 text-gray-500">
            © {new Date().getFullYear()} Nota Bene
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
