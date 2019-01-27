import React from 'react'

import avatar from '../images/avatar.jpg'
import banner from '../images/banner.jpg'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'

import Layout from '../components/layout'
import * as Scroll from 'react-scroll'

import '../sass/main.scss'

let ScrollLink = Scroll.Link

class IndexPage extends React.Component {
  toggleMenu = () => {
    document.body.classList.toggle('header-visible')
  }

  componentWillUnmount() {
    document.body.classList.remove('header-visible')
  }

  render() {
    return (
      <Layout>
        {/* <!-- Header --> */}
        <section id="header">
          <header>
            <span className="image avatar">
              <img src={avatar} alt="Nando Theessen" />
            </span>
            <h1 id="logo">
              <a href="/">Nando Theessen</a>
            </h1>
            <p>Leader, Communicator and Software Engineer</p>
          </header>
          <nav id="nav">
            <ul>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="one"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="three"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  My Work
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="two"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Skills
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="four"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </nav>
          <footer>
            <ul className="icons">
              <li>
                <a
                  href="https://twitter.com/NandoTCodes"
                  className="icon fa-twitter"
                >
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/NandoTheessen/"
                  className="icon fa-github"
                >
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nandotheessen/?locale=en_US"
                  className="icon fa-linkedin"
                >
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:nando.theessen@gmail.com"
                  className="icon fa-envelope"
                >
                  <span className="label">Email</span>
                </a>
              </li>
            </ul>
          </footer>
        </section>

        {/* <!-- Wrapper --> */}
        <div id="wrapper">
          {/* <!-- Main --> */}
          <div id="main">
            {/* <!-- One --> */}
            <section id="one">
              <div className="image main" data-position="center">
                <img src={banner} alt="" />
              </div>
              <div className="container">
                <header className="major">
                  <h2>Nando Theessen</h2>
                  <p>Leader, Communicator & Software Engineer</p>
                </header>
                <p>
                  Nandos greatest strengths are his outgoing personality, his
                  ability to learn new technologies very quickly and his way to
                  seamlessly integrate into a new environment.
                  <br />
                  With his ample leadership experience he takes pride in working
                  for and with teams to help them realize their full potential
                  and deliver on the companies goals.
                  <br />
                  <br />
                  What makes him a unique candidate is that his experience helps
                  him to prioritize business needs over nice-to-haves and focus
                  on delivering amazing product without exploding costs.
                </p>
              </div>
            </section>

            {/* <!-- Three --> */}
            <section id="three">
              <div className="container">
                <h3>My Work</h3>
                <p>
                  Throughout my time at LambdaSchool and in my spare time I've
                  worked on multiple projects. This is a selection that shows
                  what I'm most proud of and displays the most amount of skill.
                </p>
                <div className="features">
                  <article>
                    <a href="/" className="image">
                      <img src={pic01} alt="" />
                    </a>
                    <div className="inner">
                      <h4>
                        Cleaner Point of Sale
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          style={{ marginLeft: '6px' }}
                          href="https://github.com/Lambda-School-Labs/labs9-cleaner-pos"
                          className="icon fa-github"
                        >
                          <span className="label">GitHub</span>
                        </a>
                        <a
                          style={{ marginLeft: '6px' }}
                          href="https://cleanerpos.netlify.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="icon fa-globe"
                        >
                          <span className="label">LiveVersion</span>
                        </a>
                      </h4>
                      <p>
                        Simplify managing your rental properties through
                        automated assignments for your turnover assistants &
                        provide a convenient way for your customers to pay their
                        invoices via stripe.
                      </p>
                    </div>
                  </article>
                  <article>
                    <a href="/" className="image">
                      <img src={pic02} alt="" />
                    </a>
                    <div className="inner">
                      <h4>
                        Pair Me!
                        <a
                          style={{ marginLeft: '6px' }}
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://github.com/NandoTheessen/Pair-Me-LS-Winter-Hakathon-Submission"
                          className="icon fa-github"
                        >
                          <span className="label">GitHub</span>
                        </a>
                        <a
                          style={{ marginLeft: '6px' }}
                          rel="noopener noreferrer"
                          href="https://pairme.netlify.com/"
                          target="_blank"
                          className="icon fa-globe"
                        >
                          <span className="label">LiveVersion</span>
                        </a>
                        <br />
                        "Best Overall App" @ LambdaSchool Winter Hackathon '18
                      </h4>
                      <p>
                        Automatically connect your mentors and mentees to ramp
                        up your onboarding & talent development using the slack
                        API.
                      </p>
                    </div>
                  </article>
                  {/* <article>
                    <a href="/" className="image">
                      <img src={pic03} alt="" />
                    </a>
                    <div className="inner">
                      <h4>Snapped dark matter in the wild</h4>
                      <p>
                        Integer eu ante ornare amet commetus vestibulum blandit
                        integer in curae ac faucibus integer adipiscing ornare
                        amet.
                      </p>
                    </div>
                  </article> */}
                </div>
              </div>
            </section>

            {/* <!-- Two --> */}
            <section id="two">
              <div className="container">
                <h3>Things I Can Do</h3>
                <p>
                  Integer eu ante ornare amet commetus vestibulum blandit
                  integer in curae ac faucibus integer non. Adipiscing cubilia
                  elementum integer lorem ipsum dolor sit amet.
                </p>
                <ul className="feature-icons">
                  <li className="fa-code">
                    Engineer web applications from front to back using relevant
                    technologies
                  </li>
                  <li className="fa-cubes">
                    Use adequate tooling to automate time-consuming tasks
                  </li>
                  <li className="fa-book">
                    Rapidly learn new concepts & tech as well as pass on my
                    knowledge
                  </li>
                  <li className="fa-bolt">Optimize processes to stay agile</li>
                  <li className="fa-users">
                    Unify teams under the company goals and guidelines
                  </li>
                </ul>
              </div>
            </section>

            {/* <!-- Four --> */}
            <section id="four">
              <div className="container">
                <h3>Contact Me</h3>
                <p>
                  If you'd like to get in touch for business enquiries or simply
                  a chat about anything really, please contact me using any of
                  the tools below:
                </p>
                <ul
                  className="icons"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '1.5em',
                  }}
                >
                  <li>
                    <a
                      href="https://twitter.com/NandoTCodes"
                      className="icon fa-twitter"
                    >
                      <span className="label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/NandoTheessen/"
                      className="icon fa-github"
                    >
                      <span className="label">GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/nandotheessen/?locale=en_US"
                      className="icon fa-linkedin"
                    >
                      <span className="label">LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:nando.theessen@gmail.com"
                      className="icon fa-envelope"
                    >
                      <span className="label">Email</span>
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Elements */}
          </div>

          {/* <!-- Footer --> */}
          <section id="footer">
            <div className="container">
              <ul className="copyright">
                <li>&copy; Nando Theessen. All rights reserved.</li>
                <li>
                  Design: <a href="http://html5up.net">HTML5 UP</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div id="titleBar" onClick={this.toggleMenu}>
          {/* // eslint-disable-next-line */}
          <a href="#header" className="toggle" />
          <span className="title">Nando Theessen</span>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
