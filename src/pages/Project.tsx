function Projects() {
  return (
    <section id="projects" className="bg-white text-dark">
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">
          Projects
        </h1>

        <div className="row mt-4">

          {/* Project 1 */}
          <div className="col-md-4 mb-4">
            <div className="card p-4 shadow-sm h-100 text-center">
              <h5 className="mb-3">First Grading Lab1</h5>
              <p>This project is a simple portfolio made with React and TypeScript in one file App.tsx. It's about my personal information.</p>

              <a
                href="https://20241392-png.github.io/UNIT1_LESSON1_A_Romero/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4 mb-4">
            <div className="card p-4 shadow-sm h-100 text-center">
              <h5 className="mb-3">First Grading Lab2</h5>
              <p>This project is a simple React and TypeScript app that shows a student profile. It displays the name, course BSIT, enrollment status, and a list of subjects using an array. TypeScript is used to define data types for safer code.</p>

              <a
                href="https://20241392-png.github.io/LAB2_FG_ROMERO//"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4 mb-4">
            <div className="card p-4 shadow-sm h-100 text-center">
              <h5 className="mb-3">First Grading Lab3</h5>
              <p>This project is a simple React app that displays a list of students using components. It shows their names and courses. It also includes basic UI buttons like Save and Cancel, and a footer message saying “All rights reserved.”</p>

              <a
                href="https://20241392-png.github.io/FG-LAB3-ROMERO-J/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="col-md-4 mb-4">
            <div className="card p-4 shadow-sm h-100 text-center">
              <h5 className="mb-3">Midterm Grading Lab4</h5>
              <p>This project shows event details like event name, date, venue, organizer, capacity, and a list of registered students. It uses TypeScript to define the structure of the props for safety. The registered students are displayed using .map() to create a list.</p>

              <a
                href="https://20241392-png.github.io/MG_LAB4_ROMERO/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>
          {/* Project 5*/}
          <div className="col-md-4 mb-4">
            <div className="card p-4 shadow-sm h-100 text-center">
              <h5 className="mb-3">Midterm Grading Lab5</h5>
              <p>This project is a simple website made with React and Bootstrap. It has navigation links like Home, About, Contact, and Services. The About section explains that the website is built to create modern, fast, and easy-to-use web applications.</p>

              <a
                href="https://20241392-png.github.io/MG_LAB5_ROMERO/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>
          {/* Project 6 */}
          <div className="col-md-4 mb-4">
            <div className="card p-4 shadow-sm h-100 text-center">
              <h5 className="mb-3">Midterm Grading Lab6</h5>
              <p>This project is a Library Book Request Form made with React. It allows students to request books using controlled and uncontrolled forms.</p>

              <a
                href="https://20241392-png.github.io/MG_LAB6_ROMERO/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>{/* Project 7 */}
          <div className="col-md-4 mb-4">
            <div className="card p-4 shadow-sm h-100 text-center">
              <h5 className="mb-3">Midterm Grading Lab7</h5>
              <p>This project is a Student Portal made with React, TypeScript, React Router, and Bootstrap. It has pages for Home, About, Services, Contact, Book Request, and Event Feedback. The portal allows students to view information, submit book requests, and send event feedback using controlled forms. It also uses a navbar for navigation between pages.</p>

              <a
                href="https://20241392-png.github.io/MG_STUDENT_PORTAL/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>{/* Project 8 */}
          <div className="col-md-4 mb-4">
            <div className="card p-4 shadow-sm h-100 text-center">
              <h5 className="mb-3">Final Grading Lab8</h5>
              <p>This project is a simple registration form made with React and MongoDB. Users enter their full name, email, password, and confirm password to create an account. The data is sent to MongoDB and stored as a user record in the database.</p>

              <a
                href="https://20241392-png.github.io/MongoDB_Exer/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>{/* Project 9 */}
          <div className="col-md-4 mb-4">
            <div className="card p-4 shadow-sm h-100 text-center">
              <h5 className="mb-3">Final Grading Lab9</h5>
              <p>This is a simple Contact Me form made with React, MongoDB, and EmailJS. Users enter their name, email, and message, then click Send Message. EmailJS sends the message to email, while MongoDB can store the data as a record.</p>

              <a
                href="https://20241392-png.github.io/contact-with-gmail/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>
 <hr />
        </div>
      </div>
    </section>
  );
}

export default Projects;