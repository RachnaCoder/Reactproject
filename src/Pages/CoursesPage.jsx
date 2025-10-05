import Coursecard from '../Components/Coursecard.jsx';
import styles from '../CoursesPage.module.css';
import Footer from "../Components/Footer.jsx";

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      title: 'IELTS Academic',
      description: 'IELTS Academic evaluates your English proficiency in an academic environment. It is ideal for individuals aiming to pursue university-level education, for higher education',
      
    },
    {
      id: 2,
      title: 'IELTS Course',
      description: 'Descriptio aplibctant coonvieadttsattcom itty Poourses...',
      
    },
    {
      id: 3,
      title: 'IELTS  for UKVI',
      description: 'IELTS for UKVI (General) is designed for individuals planning to move to the UK for living or working purposes under specific visa classifications. It is also an option for those interested in training or studying in the UK at a below-degree level.',
      
    },
    {
      id: 4,
      title: 'IELTS Course',
      description: 'It is also an option for those interested in training or studying in the UK at a below-degree level.',
      
    },
    {
      id: 5,
      title: 'IELTS General Training',
      description: 'If you wish to pursue employment in an English-speaking environment, taking IELTS General Training test might be a requirement during your job application.',
      
    },
    {
      id: 6,
      title: 'IELTS Life Skills',
      description: 'IELTS Life Skills is an English test for UK visa applicants who are already in the UK aiming for permanent residency. It is also appropriate for those looking to join their family members in the UK or seeking British citizenship.',
      
    }
  ];

  return (
    <>
    <div className={styles.coursesPage}>
      <div className={styles.header}>
        <h1>Our IELTS Courses</h1>
      </div>
      <div className={styles.courseGrid}>
        {courses.map((course) => (
          <Coursecard
            key={course.id}
            title={course.title}
            description={course.description}
            
          />
        ))}
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default CoursesPage;
