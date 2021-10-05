import React, { useState } from "react";
import FolderComponent from "./Component/FolderComponent";
import "./App.css";

function App() {
  const [condition, setCondition] = useState(false);
  setTimeout(function () {
    setCondition(true);
  }, 4000);
  window.addEventListener("scroll", function (e) {
    if (this.scrollY > 350) {
      this.document.querySelector("#aboutMe").classList.add("aboutMe");
    } else {
      this.document.querySelector("#aboutMe").classList.remove("aboutMe");
    }

    if (this.scrollY > 840) {
      this.document.querySelector("#Technology").classList.add("Technology");
    } else {
      this.document.querySelector("#Technology").classList.remove("Technology");
    }

    if (this.scrollY > 1200) {
      this.document.querySelector("#Work").classList.add("Work");
    } else {
      this.document.querySelector("#Work").classList.remove("Work");
    }

    if (this.scrollY > 2200) {
      this.document.querySelector("#Work").classList.add("Work");
    } else {
      this.document.querySelector("#Work").classList.remove("Work");
    }

    if (this.scrollY > 3300) {
      this.document
        .querySelector("#otherProjects")
        .classList.add("otherProjects");
    } else {
      this.document
        .querySelector("#otherProjects")
        .classList.remove("otherProjects");
    }

    if (this.scrollY > 3800) {
      this.document.querySelector("#contactUs").classList.add("contactUs");
    } else {
      this.document.querySelector("#contactUs").classList.remove("contactUs");
    }

    if (this.scrollY > 4000) {
      this.document
        .querySelector("#footer-social")
        .classList.add("footer-social");
    } else {
      this.document
        .querySelector("#footer-social")
        .classList.remove("footer-social");
    }
  });
  return (
    <div>
      {condition ? (
        <div>
          <nav class="navbar navbar-expand-md shadow p-2 navbar-light sticky-top">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                <div id="outer-square-navbar">
                  <div id="square-navbar">
                    <h1 id="logo-text-navbar">N</h1>
                  </div>
                </div>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fas fa-bars fa-2x" id="handlebar-style"></i>
                {/* <span class="navbar-toggler-icon"></span> */}
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item mx-2">
                    <a
                      id="nav-link1"
                      class="nav-link"
                      aria-current="page"
                      href="#aboutMe"
                    >
                      <span className="Number">01.</span> About
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a id="nav-link2" class="nav-link" href="#Technology">
                      <span className="Number">02.</span> Technology
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a id="nav-link4" class="nav-link" href="#Work">
                      <span className="Number">03.</span> Work
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a
                      id="nav-link5"
                      class="nav-link"
                      aria-current="page"
                      href="#contactUs"
                    >
                      <span className="Number">04.</span> Contact
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a
                      id="nav-link6"
                      class="nav-link"
                      aria-current="page"
                      href="#"
                    >
                      <span className="Number">05.</span> Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <p className="mt-5" id="name-title">
              Hi, my name is
            </p>
            <h1 id="name" className="my-4">
              Nisarg Prajapati.
            </h1>
            <h1 id="subtitle">
              I Build things for the <span className="mark-title">web</span> and{" "}
              <span className="mark-title">app</span>.
            </h1>
            <p id="description" className="my-4">
              I'm a software engineer with experience of building products and
              to add some features for a web and app. I always focus how to make
              a product more effective and write a code more efficient.
            </p>
            <a
              className="btn btn-lg my-4 p-3"
              id="contactButton"
              href="mailto:nisargprajapati202@gmail.com"
            >
              Get in Touch
            </a>
          </div>
          <div className="container" id="aboutMe">
            <p>
              <span className="Number order-number">01. </span>
              <span className="title-style">About Me</span>
            </p>

            <div className="row">
              <div className="col-lg-6 col-12">
                <p id="about-me-text">
                  Hello! My name is nisarg. I'm fullstack web and app developer
                  with years of experience. I like to make products which is
                  helpful for the people. I will deploy customer ideas clearly
                  and stunningly on the internet. I also like to help students
                  to teach some thing in programming and how to make a code
                  clear and efficient.
                </p>
              </div>
              <div className="col-lg-6 col-12">
                <img src="man.png" height="300" width="300" id="image" />
              </div>
            </div>
          </div>

          <div className="container" id="Technology">
            <p>
              <span className="Number order-number">02. </span>
              <span className="title-style">Technologies I Using</span>
            </p>

            <ul id="unordered-list">
              <li className="subtitle-style my-5">Frontend : </li>
              <div className="technology-icons">
                <i class="devicon-html5-plain colored"></i>
                <i class="devicon-css3-plain colored"></i>
                <i class="devicon-bootstrap-plain colored"></i>
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-jquery-plain colored"></i>
                <i class="devicon-react-original colored"></i>
              </div>
              <li className="subtitle-style my-5">Backend : </li>
              <div className="technology-icons">
                <i class="devicon-nodejs-plain-wordmark colored"></i>
                <i class="devicon-express-original-wordmark colored"></i>
                <i class="devicon-npm-original-wordmark colored"></i>
                <i class="devicon-firebase-plain-wordmark colored"></i>
                <i class="devicon-electron-original colored"></i>
              </div>
              <li className="subtitle-style my-5">Database : </li>
              <div className="technology-icons">
                <i class="devicon-mysql-plain-wordmark colored"></i>
                <i class="devicon-postgresql-plain-wordmark colored"></i>
                <i class="devicon-mongodb-plain-wordmark colored"></i>
              </div>
              <li className="subtitle-style my-5">Version Control Tools : </li>
              <div className="technology-icons">
                <i class="devicon-github-original-wordmark colored"></i>
                <i class="devicon-git-plain-wordmark colored"></i>
                <i class="devicon-bitbucket-original-wordmark colored"></i>
              </div>
            </ul>
          </div>

          <div className="container" id="Work">
            <p>
              <span className="Number order-number">03. </span>
              <span className="title-style">Some Things I’ve Built</span>
            </p>

            <div className="row mt-5" id="work-1">
              <div className="col-12 col-lg-6">
                <a href="https://sociogram-f2859.web.app" target="_blank">
                  <img
                    src="sociogramweb.png"
                    className="shadow-lg project-image rounded"
                  />
                </a>
              </div>
              <div className="col-12 col-lg-6 mt-4">
                <div className="project-title-1">
                  <p id="project-title-1-top">Featured Project</p>
                </div>
                <div className="project-title-1">
                  <p id="project-title-1-middle">Sociogram</p>
                </div>
                <div className="shadow-lg p-4 rounded" id="project-1-title">
                  <p>
                    A great thing to connect with your friends and family. Here
                    you can make, comment and like a post. You can search your
                    friend and family members and also follow them. You can
                    increase your connection. You can also do a live chat with
                    each other.
                  </p>
                </div>
                <div className="language-used">
                  <p className="language-style">REACTJS</p>
                  <p className="language-style">NODEJS</p>
                  <p className="language-style">MONGODB</p>
                  {/* <p className="language-style">SOCKET</p> */}
                </div>
              </div>
            </div>

            <div className="row" id="work-2">
              <div className="col-12 col-lg-6 mt-4">
                <div className="project-title-2">
                  <p id="project-title-2-top">Featured Project</p>
                </div>
                <div className="project-title-2">
                  <p id="project-title-2-middle">House a dream</p>
                </div>
                <div className="shadow-lg p-4 rounded" id="project-2-title">
                  <p>
                    A best way to purchase your dream house. Here you can sell
                    your unlike house and buy your dream house. You can increase
                    your connections with industries people.
                  </p>
                </div>
                <div className="language-used-1">
                  <p className="language-style-1">NODEJS</p>
                  <p className="language-style-1">MONGODB</p>
                  <p className="language-style-1">EJS</p>
                  {/* <p className="language-style-1">PASSPORTJS</p> */}
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <a
                  href="https://infinite-everglades-34631.herokuapp.com"
                  target="_blank"
                >
                  <img
                    src="buildingweb.png"
                    className="shadow-lg project-image rounded"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="container" id="otherProjects">
            <p className="text-center">
              <span className="title-style">Other Projects</span>
            </p>
            <div className="row">
              <FolderComponent
                title="Expenditure"
                subtitle="A great way to make, update and delete your expenditure with notes. You can get a total expenditure monthly also."
                link="https://expenditure-web.web.app"
              />
              <FolderComponent
                title="Emaily"
                subtitle="Great web! With the use of this, company's can take a feedback of their all customers at one time"
                link="https://evening-shelf-64382.herokuapp.com"
              />
              <FolderComponent
                title="Burger"
                subtitle="Great web to place your burger order with me. But delivery is not started yet haha!"
                link="https://burger-web-3cbeb.web.app"
              />
              <FolderComponent
                title="Let's Chat"
                subtitle="A great place to communicate with your friends and family members in one private group with the use of only one code."
                link="https://chat-web-64e61.web.app"
              />
              <FolderComponent
                title="YourPlaces"
                subtitle="A great place to share your good place image with your friends and family. So all can take a feel of that place. Also see a location of that place in map."
                link="https://place-web-768f3.web.app"
              />
              <FolderComponent
                title="Weather"
                subtitle="Simple web to see a temperature, pressure and humidity country wise. In USA you can see state wise also. You can also check a location of that in map."
                link="https://react-weather-3ebe2.web.app"
              />
              <FolderComponent
                title="Dice Game"
                subtitle="Simple dice game. You can lose, win and draw a match. It's really depends on your luck not on your's or mine"
                link="https://nisarg-202.github.io/dice-game"
              />
              <FolderComponent
                title="Tindog"
                subtitle="Great tindog web with responsive designing."
                link="https://nisarg-202.github.io/tindog-website"
              />
              <FolderComponent
                title="Museum Candy"
                subtitle="Great responsive coloring design."
                link="https://nisarg-202.github.io/museum-candy"
              />

              <FolderComponent
                title="Youtube"
                subtitle="This is a simple one page youtube. In which you can see all the videos like you see in youtube."
                link="https://fir-cd8fd.web.app"
              />
              <FolderComponent
                title="Drum Kit"
                subtitle="This is a great drum kit website. In which you can make a sound of different instruments with the use of click or keypress."
                link="https://nisarg-202.github.io/drumkit-website"
              />
              <FolderComponent
                title="Aurora Grove"
                subtitle="Great responsive designing."
                link="https://nisarg-202.github.io/arora-grove"
              />
            </div>
          </div>

          <div className="container" id="contactUs">
            <p className="text-center">
              <span className="Number order-number">04. </span>
              <span className="title-style">What's Next?</span>
            </p>
            <h1 id="subtitle-contact" className="text-center">
              Get in Touch
            </h1>
            <div id="contact-description">
              <p id="description-contact" className="my-4 text-center">
                I'm currently available for any new opportunities, my inbox is
                always open. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>
            </div>
            <div className="text-center">
              <a
                href="mailto:nisargprajapati202@gmail.com"
                className="btn btn-lg my-4 p-3"
                id="contactButton-contact"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="container" id="footer-social">
            <a
              href="https://github.com/Nisarg-202"
              style={{ color: "#64ffda" }}
              target="_blank"
            >
              <i class="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nisarg-prajapati-676589192"
              style={{ color: "#64ffda" }}
              target="_blank"
            >
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://www.facebook.com/nisargprajapati202"
              style={{ color: "#64ffda" }}
              target="_blank"
            >
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/nisargprajapati202"
              style={{ color: "#64ffda" }}
              target="_blank"
            >
              <i class="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      ) : (
        <div id="outer-square">
          <div id="square">
            <h1 id="logo-text">N</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
