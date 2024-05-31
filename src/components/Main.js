import React from 'react';
import './Main.css';
import webDevelopmentImage from '../assets/webdevelopment.jpg';  
import dataScienceImage from '../assets/datascience.jpg'; 

function Main() {
    const blogPosts = [
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
        // Add more blog posts here
    ];

    return (
        <main>
            <section id="profile">
                <h2>Professional Summary</h2>
                <p>Experienced Java Developer with 4.5 years of proficiency in web and mobile application development. Skilled in Java, J2EE, Hibernate, Spring, and Spring Boot. Demonstrated expertise in software design, development, and problem-solving.</p>
            </section>
            <section id="education">
                <h2>Education & Qualifications</h2>
                <p><strong>Loyalist College, Toronto, ON</strong> - Ontario College Graduate Certificate in Computer Software and Database Development, May 2023 to Present</p>
                <p><strong>KKR & KSR Institute of Technology and Sciences, Guntur, India</strong> - Bachelor of Technology in Electronics & Communications Engineering, 2014 to 2018</p>
            </section>
            <section id="experience">
                <h2>Work Experience</h2>
                <article>
                    <h3>Maveric Systems Ltd, Chennai, India (Mar 2021 - Mar 2023)</h3>
                    <h4>Project: Banking Application (Hancock Whitney)</h4>
                    <p>Developed both mobile and web banking applications facilitating account management, transfers, and bill payments, among other features. Leveraged technologies such as JDK 1.8, Spring Boot, and MySQL.</p>
                </article>
                <article>
                    <h3>Effigent Software Solutions Ltd, Hyderabad, India (Sep 2018 - Mar 2021)</h3>
                    <h4>Project: Hospitality Management System</h4>
                    <p>Designed an OOPS-based web application for managing hospital operations, from patient admissions to billing. Used Spring Framework extensively for backend operations.</p>
                </article>
            </section>
            <section id="blog-posts">
                <h2>Blog Posts</h2>
                {blogPosts.map((post, index) => (
                    <article key={index}>
                        <h2>{post.title}</h2>
                        <p><strong>Published:</strong> {post.date} by <strong>{post.author}</strong></p>
                        <img src={post.image} alt={post.title} />
                        <p>{post.body}</p>
                        <hr />
                    </article>
                ))}
            </section>
        </main>
    );
}

export default Main;
