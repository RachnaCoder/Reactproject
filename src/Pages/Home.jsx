import Header from "../Components/Header.jsx"
import { GiOpenBook } from 'react-icons/gi';
import { IoNewspaperSharp } from 'react-icons/io5';
import { BsGlobe } from 'react-icons/bs';
import Cards from "../Components/Cards.jsx";
import "../App.css";
import TestimonialCard from "../Components/TestimonialCard.jsx";
import Footer from "../Components/Footer.jsx";



import profilepic1 from '../assets/profilepic1.png';
import profilepic2 from '../assets/profilepic4.png';
import profilepic3 from '../assets/profilepic3.png';
import profilepic4 from '../assets/profilepic2.png';


const features= [

  {
  icon :<GiOpenBook/>,
  title:  "Speaking Practice",
  description:"Expert coaching for IELTS success"
  },

  {
    icon:<IoNewspaperSharp/>,
    title:"Expert Mentors",
    description:"Real classroom setting for immersed contents"

  },
  {
    icon: <BsGlobe/>,
    title:"Mock Tests",
    description:"Real classroom setting for immersed contents"

  },
  {
    icon:<BsGlobe/>,
    title:"Comprehensive Course",
    description:"Real classroom setting for immersed contents"

  }
]

const testimonials=[

{
 name:"Siddharth shukla",
 image:profilepic1 ,
 improvement:"Boosted  my score by two bands",
 testimonial:"Interactive quizzes and instant feedback"
},

{
 name:"Sivani Maurya",
 image:profilepic2,
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
 image:profilepic4,
 improvement:"Boosted  my score by two bands",
 testimonial:"Very effective teaching method"
},

]


const Homepage = () => {
  return (
    <>
    
    <Header/>
    <div className="Cardcontainer">
      {features.map((feature, index) => (
     <Cards 
     key={index}
     icon ={feature.icon}
     title={feature.title}
     description={feature.description}
      />
      ))}
    </div>

    {/* <div className="separator">
    <h1 className="heading">Testimonials</h1>
    </div> */}

<div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '30px'
}}>
  <hr style={{
    flex: 1,
    maxWidth: '300px',
    border: 'none',
    borderTop: '3px solid #cca52f',
    margin: '30px'
  }} />
  <h2 style={{ margin: 0,  }}>Testimonial</h2>
  <hr style={{
    flex: 1,
    maxWidth: '300px',
    border: 'none',
    borderTop: '3px solid #cca52f',
    margin: '30px'
  }} />
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
    <Footer/>
    </>
  );
}

export default Homepage
 