import React from "react"

import { Happy_Monkey } from "next/font/google"

const HappyMonkey = Happy_Monkey({ weight: "400", subsets: ["latin"] })

const Navbar = () => {
  return (
    <div className={`${HappyMonkey.className} text-center`}>
      <h1 className="text-6xl">Pixel Converter</h1>
    </div>
  )
}

export default Navbar
