
import TestimonialCard from '../Components/TestimonialCard'
import styles from "../TestimonialPage.module.css";
import Footer from "../Components/Footer.jsx"

const TestimonialPage = () => {

    const testimonials=[
{
 name:"Siddharth shukla",
 image:"./src/assets/profilepic1.png" ,
 improvement:"Boosted  my score by two bands",
 testimonial:"Interactive quizzes and instant feedback"
},

{
 name:"Sivani Maurya",
 image:"./src/assets/profilepic4.png" ,
 improvement:"I found this incredibly helpful and userfriendly.",
 testimonial:"Very effective teaching method"
},

{
 name:"Rahul Singh",
 image:"./src/assets/profilepic3.png" ,
 improvement:"Boosted  my score by three bands",
 testimonial:"It help me improve my weak areas"
},

{
 name:"Vanshika Rai",
 image:"./src/assets/profilepic2.png" ,
 improvement:"Boosted  my score by two bands",
 testimonial:"Very effective teaching method"
},


{
 name:"Aryan Rajput",
 image:"./src/assets/profilepic5.png" ,
 improvement:"Boosted  my score by two bands",
 testimonial:"Very effective teaching method"
},

{
 name:"Shivam Rai",
 image:"./src/assets/profilepic6.png" ,
 improvement:"Boosted  my score by two bands",
 testimonial:"Very effective teaching method"
},
{
 name:"Vaishnavi Jaiswal",
 image:"./src/assets/profilepic7.png" ,
 improvement:"Boosted  my score by two bands",
 testimonial:"Very effective teaching method"
},
{
 name:"Prakhar Awasthi",
 image:"./src/assets/profilepic8.png" ,
 improvement:"Boosted  my score by two bands",
 testimonial:"Very effective teaching method"
},
{
 name:"Prachi Aggarwal",
 image:"./src/assets/profilepic9.png" ,
 improvement:"Boosted  my score by two bands",
 testimonial:"Very effective teaching method"
},
{
 name:"Vanshika Rai",
 image:"./src/assets/profilepic2.png" ,
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