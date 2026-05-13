import "./Navbar.css";
function Navbar() {
  return (
    
    <nav className="custom-navbar">

      <div className="hero-content">

        <p className="thin-text">
          Web Developer • Programmer • Student
        </p>
        
        <h1 className="hero-title">
          <span className="white-text">MY </span>
          <span className="blue-text">PORTFOLIO</span>
        </h1>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <span className="divider">|</span>
          <li><a href="#projects"> Projects </a></li>
          <span className="divider">|</span>
          <li><a href="#contact">Contact</a></li>
          
        </ul>

      </div>

    </nav>
   
  );
}

export default Navbar;