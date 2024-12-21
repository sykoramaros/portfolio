import React from "react"
import { useEffect, useRef } from "react"
import Typed from "typed.js"

const TypedTextSkills = () => {
  const typedRef = useRef(null)

  useEffect(() => {
    const options = {
      strings: ["Backend developer", "Frontend developer", "Graphic designer"],
      startDelay: 1000,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
      loop: true,
      cursorChar: "✏️",
    }
    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return <span ref={typedRef}></span>
}

export default TypedTextSkills
