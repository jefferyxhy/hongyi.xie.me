import React, { Component } from "react";
import SideBar from "./SideBar";
import Introduction from "./Introduction";
import About from "./About";

export default function Home() {
  return (
    <div className="App">
      <div id="colorlib-page">
        <div id="container-wrap">
          <SideBar></SideBar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            {/*
					<Timeline></Timeline> */}
          </div>
        </div>
      </div>
    </div>
  );
}
