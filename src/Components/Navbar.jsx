import {Link} from 'react-router-dom';
import Logo2 from "../assets/Logo2.png";
import styles from "./Navbar.module.css";
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';

const Navbar = () => {
  const[IsSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar=()=>{
    setIsSidebarOpen(!IsSidebarOpen);
  }

  const closeSidebar=()=>{
    setIsSidebarOpen(false);
  }
  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Logo2} alt="image" className={styles.image}></img>
        <h1 className={styles.text}>IELTS Prep</h1>
        </div>
      <ul className={styles.navlinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
      </ul>
      <button className={styles.navbutton}>Contact</button>
      <div className={styles.menu} onClick={toggleSidebar}>
      <BiMenu className={styles.icon}/>
      </div>
    </nav>


    {IsSidebarOpen && (
        <div className={styles.overlay} onClick={closeSidebar}></div>
      )}

      <div className={`${styles.sidebar} ${IsSidebarOpen ? styles.sidebarOpen : ''}`}>
        <button className={styles.closeBtn} onClick={closeSidebar}>×</button>
        <ul className={styles.sidebarLinks}>
          <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
          <li><Link to="/courses" onClick={closeSidebar}>Courses</Link></li>
          <li><Link to="/testimonials" onClick={closeSidebar}>Testimonials</Link></li>
          <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
        </ul>
      </div>

</>
  );
};

export default Navbar