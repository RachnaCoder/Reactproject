import { Link } from 'react-router-dom';
import styles from './Coursecard.module.css';
import { FaBook } from 'react-icons/fa';

const Coursecard = ({ title, description, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <FaBook className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    
        <button className={styles.enrollBtn}>Enroll</button>
      
    </div>
  );
};

export default Coursecard;
