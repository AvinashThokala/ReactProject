import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import webDevelopmentImage from './assets/webdevelopment.jpg';  
import dataScienceImage from './assets/datascience.jpg';

function App() {
  const appStyle = {
    textAlign: 'center'
  };

  const [blogPosts] = useState([
    {
      title: "Journey into Web Development",
      date: "June 10, 2024",
      author: "Avinash Thokala",
      image: webDevelopmentImage,
      body: "Embarking on the journey of web development has been both challenging and rewarding. From learning HTML, CSS, and JavaScript to mastering frameworks like React and Angular, every step has been a significant milestone. In this post, I share my experiences, challenges faced, and resources that helped me along the way. Whether you're a beginner or an experienced developer, I hope my journey can provide some insights and motivation for your own path in web development."
    },
    {
      title: "Data Science in Daily Life",
      date: "June 20, 2024",
      author: "Avinash Thokala",
      image: dataScienceImage,
      body: "Data science has transformed the way we interact with the world. From personalized recommendations on streaming platforms to advanced predictive models in healthcare, the applications of data science are vast and impactful. In this post, I delve into how data science is used in various industries, the tools and techniques that drive these innovations, and the ethical considerations we must keep in mind. Join me as I explore the fascinating world of data science and its influence on our daily lives."
    }
  ]);

  const sections = {
    profile: {
      title: "Professional Summary",
      content: "Experienced Java Developer with 4.5 years of proficiency in web and mobile application development. Skilled in Java, J2EE, Hibernate, Spring, and Spring Boot. Demonstrated expertise in software design, development, and problem-solving."
    },
    education: {
      title: "Education & Qualifications",
      content: [
        "Loyalist College, Toronto, ON - Ontario College Graduate Certificate in Computer Software and Database Development, May 2023 to Present",
        "KKR & KSR Institute of Technology and Sciences, Guntur, India - Bachelor of Technology in Electronics & Communications Engineering, 2014 to 2018"
      ]
    },
    experience: [
      {
        title: "Maveric Systems Ltd, Chennai, India (Mar 2021 - Mar 2023)",
        project: "Banking Application (Hancock Whitney)",
        details: "Developed both mobile and web banking applications facilitating account management, transfers, and bill payments, among other features. Leveraged technologies such as JDK 1.8, Spring Boot, and MySQL."
      },
      {
        title: "Effigent Software Solutions Ltd, Hyderabad, India (Sep 2018 - Mar 2021)",
        project: "Hospitality Management System",
        details: "Designed an OOPS-based web application for managing hospital operations, from patient admissions to billing. Used Spring Framework extensively for backend operations."
      }
    ]
  };

  return (
    <div className="App" style={appStyle}>
      <Header navItems={['Profile', 'Education', 'Experience']} />
      <Main sections={sections} blogPosts={blogPosts} />
      <Footer />
    </div>
  );
}

export default App;
