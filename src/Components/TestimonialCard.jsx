import styles from "./TestimonialCard.module.css";

const TestimonialCard = ({image, name, improvement, testimonial}) => {
  return (
    <div className={styles.testimonial}>
<img src={image} alt={name} className={styles.profilepic}/>
<h4>{name}</h4>
<div className={styles.improvement}>{improvement}</div>
<p className={styles.testimonialText}>{testimonial}</p>

    </div>
  )
}

export default TestimonialCard