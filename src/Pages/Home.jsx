import Navbar  from "../Components/Navbar.jsx"
import Header from "../Components/Header.jsx"
import { GiOpenBook } from 'react-icons/gi';
import { IoNewspaperSharp } from 'react-icons/io5';
import { BsGlobe } from 'react-icons/bs';
import Cards from "../Components/Cards.jsx";
import "../App.css";
import TestimonialCard from "../Components/TestimonialCard.jsx";
import Footer from "../Components/Footer.jsx";


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

]


const Homepage = () => {
  return (
    <>
    <Navbar/>
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
     {testimonials.map((t,idx) =>(
    <TestimonialCard 
    key={t.idx}
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
 