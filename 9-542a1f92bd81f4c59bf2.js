(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+Jn8":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.title,a=e.subtitle,n=void 0===a?"":a;return r.a.createElement("div",{className:"pt-12 sm:pt-16 lg:pt-24"},r.a.createElement("div",{className:"max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8"},r.a.createElement("div",{className:"mx-auto lg:max-w-none"},r.a.createElement("p",{className:"mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none"},t),r.a.createElement("p",{className:"mt-2 text-xl leading-7 text-gray-300"},n))))}},"/R33":function(e,t,a){},lUWQ:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n);function l(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var o=a("MZca"),s=function(e){var t=e.loading,a=e.message,s=Object(n.useState)(!0),c=s[0],i=s[1];return Object(n.useEffect)((function(){t||setTimeout(i,1600,!1)}),[t]),r.a.createElement("div",{className:l("fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center z-10",!c&&"pointer-events-none")},r.a.createElement(o.a,{show:c,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"},r.a.createElement("div",{className:"fixed inset-0 transition-opacity"},r.a.createElement("div",{className:"absolute inset-0 bg-gray-500 opacity-75"}))),r.a.createElement(o.a,{show:c,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},r.a.createElement("div",{className:"bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6"},r.a.createElement("div",null,r.a.createElement("div",{className:l("mx-auto flex items-center justify-center h-12 w-12 rounded-full",t?"bg-orange-100":"bg-green-100")},t?r.a.createElement("svg",{fill:"currentColor",className:"h-6 w-6 text-orange-600",viewBox:"0 0 20 20"},r.a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})):r.a.createElement("svg",{className:"h-6 w-6 text-green-600",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"}))),r.a.createElement("div",{className:"mt-3 text-center sm:mt-5"},r.a.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900"},t?"Loading...":"Complete!"),r.a.createElement("p",{className:"mt-4"},a),r.a.createElement("p",{className:"mt-4"},"Can take up to one minute..."))))))},c=a("+Jn8"),i=(a("/R33"),function(e){var t=Object(n.useState)(),a=t[0],r=t[1],l=Object(n.useState)(!0),o=l[0],s=l[1];Object(n.useEffect)((function(){var t=document.createElement("script");return t.innerHTML="self.pyodideWorker = new Worker('/pyodideWorker.js')",document.body.appendChild(t),window.pyodideWorker.onmessage=function(t){var a=t.data;o&&s(!1),e(a)},window.pyodideWorker.postMessage({method:"runPython",data:"True"}),r(window.pyodideWorker),function(){document.body.removeChild(t)}}),[]);return{loading:o,pyodide:a,runPython:function(e){a&&a.postMessage({method:"runPython",data:e})},loadPackages:function(e){a&&a.postMessage({method:"loadPackages",data:e})},getPythonGlobal:function(e){a&&a.postMessage({method:"pyimport",data:e})},attachGlobal:function(e){a&&a.postMessage({method:"attachGlobal",data:e})},reload:function(e){a&&a.postMessage({method:"reload",data:e})}}}),m=function(e){var t=e.token,a=e.index,o=e.send,s=e.selectedToken,c=Object(n.useState)()[1],i=Object(n.useCallback)((function(){return c({})}),[]),m={verb:"red",noun:"blue",adj:"green"},d=Object(n.useState)(""),u=d[0],p=d[1];return r.a.createElement("span",{key:"wrap"+a},r.a.createElement("span",{key:a,className:l("cursor-pointer",s===a?"rounded-lg bg-"+u+"-300 p-1 pl-2 pr-2":""),onClick:function(){p(m[t.pos]),o(t,a),i()}},t.text)," ")},d=function(e){var t=e.send,a=Object(n.useState)(""),l=a[0],o=a[1],s=function(){t(l),o("")};return r.a.createElement("div",{className:"bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12"},r.a.createElement("div",{className:"mt-1 flex rounded-md shadow-sm"},r.a.createElement("div",{className:"relative flex-grow focus-within:z-10"},r.a.createElement("input",{id:"text_input",className:"form-input block w-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5",placeholder:"Enter Latin text...",onChange:function(e){return o(e.target.value)},value:l,onKeyDown:function(e){return"Enter"===e.key&&s()}})),r.a.createElement("button",{className:"-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150",onClick:s},r.a.createElement("svg",{className:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},r.a.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})),r.a.createElement("span",{className:"ml-2"},"Parse"))))};t.default=function(){var e=Object(n.useState)()[1],t=Object(n.useCallback)((function(){return e({})}),[]),a=i((function(e){(null==e?void 0:e.length)>0&&y(e)})),l=a.loading,o=a.attachGlobal,u=a.runPython,p=(a.reload,Object(n.useReducer)((function(e,t){return t&&e&&!e.includes(t)?(e.push(t),e):e}),[])),g=p[0],f=p[1],x=Object(n.useState)(-1),v=x[0],b=x[1],h=function(e,a){b(a),t()},y=function(e){f(e),t()};return Object(n.useEffect)((function(){l||(o({}),u("from js import demo"),u("exec(demo)"))}),[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bg-gray-900"},r.a.createElement(c.a,{title:"Nota Bene Demo"}),r.a.createElement("div",{className:"mt-8 pb-12 bg-white sm:mt-12 sm:pb-16 lg:pb-24"},r.a.createElement("div",{className:"relative"},r.a.createElement("div",{className:"absolute inset-0 h-32 bg-gray-900"}),r.a.createElement("div",{className:"relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"},r.a.createElement("div",{className:"mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none"},r.a.createElement("div",{className:"bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12"},r.a.createElement(d,{send:function(e){u('parse("'+e+'")')}}),r.a.createElement("div",{className:"mb-6"},0===g.length?r.a.createElement("div",{className:"text-gray-500 text-center text-sm"},"Enter Latin text to get started ↑"):r.a.createElement("div",{className:"grid grid-cols-2"},r.a.createElement("div",null,g.map((function(e,t){return r.a.createElement("div",{className:"rounded-lg bg-white shadow-lg border border-gray-400 p-2 m-4 my-4 text-left",key:t},e.map((function(e,a){return r.a.createElement(m,{token:e,key:a,index:t+","+a,send:h,selectedToken:v})})))}))),r.a.createElement("div",{className:"rounded-lg bg-white shadow-lg border border-gray-400 p-2 m-4 my-4 text-left"},""!=v?r.a.createElement("h1",null,g[v.split(",")[0]][v.split(",")[1]].text):r.a.createElement("h1",null)))))))))),r.a.createElement(s,{loading:l,message:"This demo requires a modern browser."}))}}}]);
//# sourceMappingURL=9-542a1f92bd81f4c59bf2.js.map