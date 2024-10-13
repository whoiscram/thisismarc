import React from "react";
import "./resume.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  education,
  techTools,
} from "../../Main";

export const Resume = () => {
    return (
        <HelmetProvider>
          <Container className="About-header">
            <Row className="mb-5 mt-3 pt-md-3">
              <Col lg="8">
                <h1 className="display-4 mb-4"> Resume </h1>
                <hr className="t_border my-4 ml-0 text-left" />
                <div className="resume-content">
                  <h2>TORRES, MARC JUSTINE G.</h2>
                  <p>Baguio City, Benguet, 2600 / Dau, Mabalacat</p>
                  <p>+63 999 458 0043 | torresmarc722@gmail.com | <a href="https://linkedin.com/in/marctorres">linkedin.com/in/marctorres</a></p>
                  
                  <h3>TECHNICAL SKILLS</h3>
                  <ul>
                    <li>JavaScript, React.js, Node.js, Express.js, PHP, Laravel</li>
                    <li>HTML, CSS, Responsive Web Design, Material UI, Bootstrap, Tailwind CSS</li>
                    <li>AJAX, jQuery, MVC Framework, Docker and Containerization</li>
                    <li>ERD, MariaDB, MySQL, Git, GitHub, Test-Driven Development</li>
                    <li>Agile Development, Postman, Copilot</li>
                  </ul>
                  
                  <h3>TRAINING AND EXPERIENCE</h3>
                  <h4>Programmer (Part Time) - September 2024 – Present</h4>
                  <ul>
                    <li>Created automated install scripts for various GitHub repositories, handling dependencies and environment configurations using Docker, Python, Bash, and Git.</li>
                    <li>Troubleshot and reproduced issues reported in GitHub repositories.</li>
                  </ul>
    
                  <h4>Junior Programmer - New Media Services (March 21 2024 - September 21 2024)</h4>
                  <ul>
                    <li>Revamped and enhanced UI/UX for various web applications, optimizing user experience.</li>
                    <li>Modified and optimized backend queries to improve performance.</li>
                    <li>Built and integrated APIs for third-party AI services.</li>
                    <li>Refactored legacy codebases and implemented containerization using Docker.</li>
                  </ul>
    
                  <h4>Quality Assurance (QA) - NOAH Business Applications (January 24, 2023 – May 19, 2023)</h4>
                  <ul>
                    <li>Conducted manual testing of User Interfaces to ensure compliance with quality standards.</li>
                  </ul>
    
                  <h3>PERSONAL PROJECTS</h3>
                  <ul>
                    <li><strong>Portfolio:</strong> A deployed React project using GitHub Pages showcasing my skills as a full-stack developer.</li>
                    <li><strong>Anita Quick Cash:</strong> A standalone single-page application (SPA) for companies to loan out employees.</li>
                    <li><strong>Online Ordering System:</strong> Thesis project highlighting e-commerce functionalities.</li>
                  </ul>
    
                  <h3>EDUCATION</h3>
                  <h4>Bachelor of Information Technology - Saint Louis University, Baguio City (June 5, 2023)</h4>
                  <ul>
                    <li>Basic Web Development (HTML, CSS, and JavaScript)</li>
                    <li>Object-Oriented Programming (Java)</li>
                    <li>Data Structures and Algorithms</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </HelmetProvider>
    );
};
