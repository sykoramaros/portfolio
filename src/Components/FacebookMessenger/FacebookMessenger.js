// "use client"
// import React from "react"
// import { FacebookProvider, CustomChat } from "react-facebook"

// const FacebookMessenger = () => {
//   return (
//     <div>
//       <FacebookProvider appId="610437348523152" chatSupport>
//         <CustomChat pageId="556953277507224" minimized={true} />
//       </FacebookProvider>
//     </div>
//   )
// }

// export default FacebookMessenger

// import React, { useEffect } from "react"

// function FacebookMessenger() {
//   useEffect(() => {
//     // Vytvoření FB root
//     const fbRoot = document.createElement("div")
//     fbRoot.id = "fb-root"
//     document.body.appendChild(fbRoot)

//     // Vytvoření Chat elementu
//     const fbCustomerChat = document.createElement("div")
//     fbCustomerChat.id = "fb-customer-chat"
//     fbCustomerChat.className = "fb-customer-chat"
//     fbCustomerChat.setAttribute("page_id", "556953277507224") // Vaše PAGE_ID
//     fbCustomerChat.setAttribute("attribution", "biz_inbox")
//     document.body.appendChild(fbCustomerChat)

//     // Načtení FB SDK
//     window.fbAsyncInit = function () {
//       window.FB.init({
//         xfbml: true,
//         version: "v18.0",
//       })
//     }

//     const script = document.createElement("script")
//     script.id = "facebook-jssdk"
//     script.src = "https://connect.facebook.net/cs_CZ/sdk/xfbml.customerchat.js"
//     script.async = true
//     script.defer = true
//     document.body.appendChild(script)

//     // Cleanup při unmount
//     return () => {
//       document.body.removeChild(fbRoot)
//       document.body.removeChild(fbCustomerChat)
//       const scriptToRemove = document.getElementById("facebook-jssdk")
//       if (scriptToRemove) document.body.removeChild(scriptToRemove)
//     }
//   }, [])

//   return null
// }

// export default FacebookMessenger

/* global FB */ // Přidáno pro ESLint

import React, { useEffect } from "react"

const FacebookMessenger = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      console.log(window.FB)
      // Zkontrolujeme, zda je FB definováno
      if (typeof FB !== "undefined") {
        FB.init({
          appId: "610437348523152", // Nahraď vlastním App ID
          autoLogAppEvents: true,
          xfbml: true,
          version: "v18.0",
        })
      }
    }
    ;(function (d, s, id) {
      if (d.getElementById(id)) return
      let js = d.createElement(s)
      js.id = id
      js.src = "https://connect.facebook.net/en_US/sdk.js"
      js.async = true
      js.defer = true
      js.crossOrigin = "anonymous"
      d.getElementsByTagName("head")[0].appendChild(js)
    })(document, "script", "facebook-jssdk")
  }, [])

  return (
    <div>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0"
      ></script>
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="556953277507224" // Nahraď vlastním Page ID
      ></div>
    </div>
  )
}

export default FacebookMessenger
