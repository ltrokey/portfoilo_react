import ResumeLink from "../components/UI/resume/resumeDownload";

export default function Resume() {
  return (
    <div className="container">
      <h2>Resume</h2>

      <ResumeLink />
      <div className="row">
        <div className="col-sm">
          <div>
            <h3>Programming Languages</h3>
            <ul>
              <li>JavaScript</li>
            </ul>
          </div>
          <div>
            <h3>Web Development</h3>
            <ul>
              <li>
                MERN STACK
                <ul>
                  <ol>MongoDB</ol>
                  <ol>Express.js</ol>
                  <ol>React</ol>
                  <ol>Node.js</ol>
                </ul>
              </li>
              <li>HTML & CSS</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Web APIs</li>
              <li>Third-Party APIs</li>
              <li>Server-Side APIs</li>
              <li>GraphQL</li>
              <li>PWA</li>
              <li>Webpack</li>
              <li>Babel</li>
              <li>npm scripts</li>
            </ul>
          </div>
          <div>
            <h3>Testing</h3>
            <ul>
              <li>TDD (Test-Driven Development)</li>
              <li>Jest</li>
              <li>Vitest</li>
            </ul>
          </div>
        </div>

        <div className="col-sm">
          <div>
            <h3>Version Control & Tools</h3>
            <ul>
              <li>GIT</li>
              <li>GitHub</li>
              <li>Heroku</li>
              <li>Render</li>
              <li>Insomnia</li>
              <li>MySQL Workbench</li>
              <li>Apollo Sandbox</li>
              <li>Compass</li>
            </ul>
          </div>
          <div>
            <h3>Database Management</h3>
            <ul>
              <li>SQL</li>
              <li>NoSQL</li>
              <li>Mongoose</li>
              <li>Sequelize</li>
              <li>ORM (Object-Oriented Programming)</li>
              <li>ODM (Object-Document Mapping)</li>
            </ul>
          </div>
          <div>
            <h3>Software Architecture & Design</h3>
            <ul>
              <li>OOP (Object-Oriented Programming)</li>
              <li>MVC (Model-View-Controller)</li>
            </ul>
          </div>
          <div>
            <h3>Security</h3>
            <ul>
              <li>JWT (JSON Web Tokens)</li>
              <li>Sessions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
