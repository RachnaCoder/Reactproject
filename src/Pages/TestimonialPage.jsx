
import TestimonialCard from '../Components/TestimonialCard'
import styles from "../TestimonialPage.module.css";
import Footer from "../Components/Footer.jsx"



import profilepic1 from '../assets/profilepic1.png';
import profilepic2 from '../assets/profilepic4.png';
import profilepic3 from '../assets/profilepic3.png';
import profilepic4 from '../assets/profilepic2.png';
import profilepic5 from '../assets/profilepic5.png';
import profilepic6 from '../assets/profilepic6.png';
import profilepic7 from '../assets/profilepic7.png';
import profilepic8 from '../assets/profilepic8.png';
import profilepic9 from '../assets/profilepic9.png';

const TestimonialPage = () => {

    const testimonials=[
{
 name:"Siddharth shukla",
 image:profilepic1,
 improvement:"Boosted  my score by two bands",
 testimonial:"Interactive quizzes and instant feedback"
},

{
 name:"Sivani Maurya",
 image: profilepic2,
 improvement:"I found this incredibly helpful and userfriendly.",
 testimonial:"Very effective teaching method"
},

{
 name:"Rahul Singh",
 image:profilepic3 ,
 improvement:"Boosted  my score by three bands",
 testimonial:"It help me improve my weak areas"
},

{
 name:"Vanshika Rai",
 image:profilepic4 ,
 improvement:"Boosted  my score by two bands",
 testimonial:"Very effective teaching method"
},


{
 name:"Aryan Rajput",
 image:profilepic5 ,
 improvement:"Boosted  my score by two bands",
 testimonial:"Very effective teaching method"
},

{
 name:"Shivam Rai",
 image:profilepic6 ,
 improvement:"Boosted  my score by two bands",
 testimonial:"Very effective teaching method"
},
{
 name:"Vaishnavi Jaiswal",
 image:profilepic7 ,
 improvement:"Boosted  my score by two bands",
 testimonial:"Very effective teaching method"
},
{
 name:"Prakhar Awasthi",
 image:profilepic8 ,
 improvement:"Boosted  my score by two bands",
 testimonial:"Very effective teaching method"
},
{
 name:"Prachi Aggarwal",
 image:profilepic9 ,
 improvement:"Boosted  my score by two bands",
 testimonial:"Very effective teaching method"
},
{
 name:"Vanshika Rai",
 image:profilepic4 ,
 improvement:"Boosted  my score by two bands",
 testimonial:"Very effective teaching method"
},


]

  return (
    <>

    <div className={styles.testimonialsPage}>
      <div className={styles.header}>
        <h1>Student Success Stories</h1>
      </div>
 
   <div className="testimonialCards">
     {testimonials.map((t,index) =>(
    <TestimonialCard 
    key={index}
    image={t.image}
    name={t.name}
    improvement={t.improvement}
    testimonial={t.testimonial}/>
     ))}

    </div>
    </div>
    <Footer/>
    </>
     )
}



    export default TestimonialPage