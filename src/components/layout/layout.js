import React from "react"
import "./layout.css"
import {GlobalStyle} from "../Styles/GlobalStyle";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
        <GlobalStyle/>
        <Header />
        <main>{children}</main>
    </>
  )
}

export default Layout
