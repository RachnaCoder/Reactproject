import styles from "./Header.module.css";
import banner3 from "../assets/banner3.png";

const Header = () => {
  return (
    <div>
<img src={banner3} alt="bannerimage" className={styles.bannerimage}/>



    </div>
  )
}

export default Header