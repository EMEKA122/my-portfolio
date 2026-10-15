 import "./App.css";
function App() { return ( <div className="app"> {/* Navigation */} <header className="navbar"> <a href="#home" className="logo"> Portfolio<span>.</span> </a>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  {/* Hero */}
  <main>
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="intro">Hello, I'm</p>

        <h1>
          A Software
          <br />
          <span>Developer.</span>
        </h1>

        <p className="hero-text">
          I build responsive and user-friendly web applications using
          modern frontend and backend technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="code-window">
          <div className="window-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="code">
            <p>
              <span className="purple">const</span>{" "}
              <span className="blue">developer</span> = {"{"}
            </p>
            <p>
              &nbsp;&nbsp;name: <span className="green">"Developer"</span>,
            </p>
            <p>
              &nbsp;&nbsp;skills: [
              <span className="green">"React"</span>,
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"JavaScript"</span>,
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"Python"</span>
              ]
            </p>
            <p>
              &nbsp;&nbsp;passion:{" "}
              <span className="green">"Building"</span>
            </p>
            <p>{"}"};</p>
          </div>
        </div>
      </div>
    </section>

    {/* About */}
    <section id="about" className="section">
      <div className="section-heading">
        <p>ABOUT ME</p>
        <h2>Turning ideas into digital experiences.</h2>
      </div>

      <div className="about-content">
            <p>
            I am a graduate with a background in Cooperative and Business Management
            and a strong interest in technology and software development.
          </p>

          <p>
            I have been developing my skills in full-stack web development,
            learning how frontend interfaces connect with backend
            systems and databases.
          </p>

          <p>
            I enjoy creating practical, responsive and efficient
            applications while continuously improving my technical skills.
          </p>
        </div>

        <div className="about-stats">
          <div>
            <strong>01+</strong>
            <span>Years Learning</span>
          </div>

          <div>
            <strong>10+</strong>
            <span>Technologies</span>
          </div>

          <div>
            <strong>05+</strong>
            <span>Projects</span>
          </div>
        </div>
      </div>
    </section>

    {/* Skills */}
    <section id="skills" className="section dark-section">
      <div className="section-heading">
        <p>MY SKILLS</p>
        <h2>Technologies I work with.</h2>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <div className="skill-number">01</div>
          <h3>Frontend</h3>
          <p>
            HTML, CSS, JavaScript, React, React Router and responsive web
            development.
          </p>
        </div>

        <div className="skill-card">
          <div className="skill-number">02</div>
          <h3>Backend</h3>
          <p>
            Backend development, APIs, databases and server-side
 application development.
          </p>
        </div>

        <div className="skill-card">
          <div className="skill-number">03</div>
          <h3>Tools</h3>
          <p>
            Git, GitHub, VS Code, npm, Vite and other modern development
            tools.
          </p>
        </div>

        <div className="skill-card">
          <div className="skill-number">04</div>
          <h3>Currently Learning</h3>
          <p>
            Improving my full-stack development skills and building more
            advanced real-world applications.
          </p>
        </div>
      </div>
    </section>

    {/* Projects */}
    <section id="projects" className="section">
      <div className="section-heading">
        <p>MY WORK</p>
        <h2>Featured projects.</h2>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <div className="project-image ecommerce">
            <span>STYLEHUB</span>
          </div>

          <div className="project-info">
            <p className="project-type">E-COMMERCE</p>
            <h3>StyleHub</h3>

            <p>
              A responsive clothing e-commerce application where users
              can browse products, filter categories, view products and
              manage a shopping cart.
            </p>

            <div className="tags">
              <span>React</span>
              <span>CSS</span>
              <span>Context API</span>
              <span>JSON Server</span>
            </div>

            <div className="project-links">
              <a href="#" target="_blank">
                GitHub ↗
              </a>

              <a href="#" target="_blank">
                Live Demo ↗
              </a>
            </div>
          </div>
        </article>

        <article className="project-card">
          <div className="project-image portfolio-project">
            <span>PORTFOLIO</span>
          </div>

          <div className="project-info">
            <p className="project-type">WEB DEVELOPMENT</p>
            <h3>Personal Portfolio</h3>

            <p>
              A responsive portfolio website designed to showcase my
              skills, projects, education and experience.
            </p>

            <div className="tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>

            <div className="project-links">
              <a href="#" target="_blank">
                GitHub ↗
              </a>

              <a href="#home">
                Live Demo ↗
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    {/* Education */}
    <section id="education" className="section dark-section">
      <div className="section-heading">
        <p>EDUCATION & EXPERIENCE</p>
        <h2>My journey so far.</h2>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div>
            <span>University</span>
            <h3>Cooperative and Business Management</h3>
            <p>
              Completed my university education with a degree in
              Cooperative and Business Management.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div>
            <span>Software Development</span>
            <h3>Full-Stack Web Development</h3>
            <p>
              Studied software engineering and full-stack web development,
              gaining practical experience with frontend and backend
              technologies.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div>
            <span>2026 — Present</span>
            <h3>Building Real Projects</h3>
            <p>
              Continuing to improve my development skills by creating
 practical applications and expanding my knowledge of modern
              software technologies.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Contact */}
    <section id="contact" className="section contact-section">
      <div className="section-heading">
        <p>GET IN TOUCH</p>
        <h2>Let's build something together.</h2>
      </div>

      <div className="contact-content">
        <p>
          I'm open to opportunities, collaborations, projects and
          conversations about technology.
        </p>

        <a
          href="mailto:onyiaezekiel209@gmail.com"
          className="btn primary-btn"
        >
          Send Me an Email
        </a>
      </div>
    </section>
  </main>

  {/* Footer */}
  <footer>
    <p>© 2026 Portfolio. Built with React.</p>

    <div>
      <a href="https://github.com/EMEKA122" target="_blank">
        GitHub
      </a>

      <a href="https://www.linkedin.com/in/onyia-ezekiel-707296394/" target="_blank">
        LinkedIn
      </a>
    </div>
  </footer>
</div>
); }
export default App;