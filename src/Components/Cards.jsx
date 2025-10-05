
import styles from './Cards.module.css';

function Cards({ icon, title, description }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Cards;
