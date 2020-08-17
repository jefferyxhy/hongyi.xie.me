import React, { Component } from "react";

export class SideBar extends Component {
  render() {
    return (
      <div>
        <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <i />
        </a>
        <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
          <div className="text-center">
            <div className="author-img" style={{ backgroundImage: "url(images/about.jpg)" }} />
            <h1 id="colorlib-logo">
              <a href="index.html">Hongyi Xie</a>
            </h1>
            <span className="position">
              <a href="#">Full Stack Web Developer</a> in Australia
            </span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active">
                  <a href="#" data-nav-section="home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="about">
                    About
                  </a>
                </li>
                {/* <li>
                  <a href="#" data-nav-section="skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="education">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="experience">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="work">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="contact">
                    Contact
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>
          <div role="navigation" className="navbar">
            <div>
              <a href="https://github.com/jefferyxhy">
                <i className="icon-github" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/hongyi-xie-091359b8/">
                <i className="icon-linkedin2" />
              </a>
            </div>
          </div>
          <div className="colorlib-footer">
            <p>
              <small>
                template made with <i className="icon-heart" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </small>
            </p>
          </div>
        </aside>
      </div>
    );
  }
}

export default SideBar;
