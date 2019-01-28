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
            <p>
              Charismatic Software Engineer with Strong Leadership Skills and a
              Passion for Mentoring
            </p>
          </header>
          <nav id="nav">
            <ul>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="one"
                  spy={true}
                  smooth={true}
                  offset={0}
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
                  offset={0}
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
                  offset={0}
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
                  offset={0}
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
                  <p>
                    Charismatic Software Engineer with Strong Leadership Skills
                    and a Passion for Mentoring
                  </p>
                </header>
                <p>
                  Nando's greatest strengths are his outgoing personality, his
                  ability to learn new technologies very quickly and his way to
                  seamlessly integrate into a new environment.
                  <br />
                  With his four years of leadership experience he takes pride in
                  working for and with teams to help them realize their full
                  potential and deliver on the companies goals.
                  <br />
                  <br />
                  What makes him a unique candidate is that his experience helps
                  him to prioritize business needs and focus on delivering
                  amazing product without increasing costs.
                </p>
              </div>
            </section>

            {/* <!-- Three --> */}
            <section id="three">
              <div className="container">
                <h3>My Work</h3>
                <p>
                  A selection of the projects I've tackled over the last couple
                  of months.
                </p>
                <div className="features">
                  <article>
                    <a
                      href="https://cleanerpos.netlify.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="image"
                    >
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
                      <p style={{ marginBlockEnd: '24px' }}>
                        <span style={{ fontWeight: 'bold' }}>Tech Stack:</span>{' '}
                        React (Hooks), TypeScript, Emotion, Express, Travis,
                        webpack, Babel, Jest, Firebase, PostgreSQL, Stripe API
                      </p>
                      <p>
                        Simplify managing your rental properties through
                        automated assignments for your turnover assistants &
                        provide a convenient way for your customers to pay their
                        invoices via stripe.
                      </p>
                    </div>
                  </article>
                  <article>
                    <a
                      rel="noopener noreferrer"
                      href="https://pairme.netlify.com/"
                      className="image"
                    >
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
                      <p style={{ marginBlockEnd: '12px' }}>
                        <span style={{ fontWeight: 'bold' }}>Tech Stack:</span>{' '}
                        React, Redux, Emotion, Express, webpack, Jest,
                        PostgreSQL, Slack API
                      </p>
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
                <h3>Relevant Skills</h3>
                <p>
                  Nando's main focus when it comes to engineering lies on having
                  very good fundamental knowledge. This allows him to pick up
                  any new and trendy technologies very quickly and come to a
                  deep understanding in a short amount of time.
                </p>
                <ul className="feature-icons">
                  <li className="fa-code">
                    Excellent knowledge of JavaScript, fundamentals in Python &
                    C
                  </li>
                  <li className="fa-cubes">
                    Good grasp of the JavaScript ecosystem and relevant tools
                  </li>
                  <li className="fa-code">
                    Strong advocate for testing best practices & code review
                  </li>
                  <li className="fa-book">
                    Loves to learn from and share knowledge with peers
                  </li>
                  <li className="fa-users">
                    Unify teams under company goals and guidelines
                  </li>
                  <li className="fa-git-square">
                    Familiar with git workflow and able to follow best practices
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
                  a chat about anything at all, please send me an email or
                  contact me using any of the tools below:
                </p>
                <form
                  method="post"
                  action="https://formspree.io/nando.theessen@gmail.com"
                >
                  <div className="row gtr-uniform">
                    <div className="col-6 col-12-xsmall">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-6 col-12-xsmall">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="6"
                      />
                    </div>
                    <div className="col-12">
                      <ul className="actions">
                        <li>
                          <input
                            type="submit"
                            className="primary"
                            value="Send Message"
                          />
                        </li>
                        <li>
                          <input type="reset" value="Reset Form" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
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
          <a href="#header" className="toggle" />
          <span className="title">Nando Theessen</span>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
