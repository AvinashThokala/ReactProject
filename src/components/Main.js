import React from 'react';
import PropTypes from 'prop-types';

function Main({ sections, blogPosts }) {
  const mainStyle = {
    padding: '20px',
    background: '#f8f8f8',
    color: '#333'
  };

  const articleStyle = {
    background: '#fff',
    padding: '15px',
    marginTop: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    marginBottom: '20px'
  };

  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginTop: '10px',
    borderRadius: '8px'
  };

  const hrStyle = {
    marginTop: '20px'
  };

  return (
    <main style={mainStyle}>
           <section id="profile">
        <article style={articleStyle}>
          <h2>{sections.profile.title}</h2>
          <p>{sections.profile.content}</p>
        </article>
      </section>
      <section id="education">
        <article style={articleStyle}>
          <h2>{sections.education.title}</h2>
          {sections.education.content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </article>
      </section>
      <section id="experience">
        <h2>Work Experience</h2>
        {sections.experience.map((exp, index) => (
          <article key={index} style={articleStyle}>
            <h3>{exp.title}</h3>
            <h4>Project: {exp.project}</h4>
            <p>{exp.details}</p>
          </article>
        ))}
      </section>
      <section id="blog-posts">
        <h2>Blog Posts</h2>
        {blogPosts.map((post, index) => (
          <article key={index} style={articleStyle}>
            <h2>{post.title}</h2>
            <p><strong>Published:</strong> {post.date} by <strong>{post.author}</strong></p>
            <img src={post.image} alt={post.title} style={imgStyle} />
            <p>{post.body}</p>
            <hr style={hrStyle} />
          </article>
        ))}
      </section>
    </main>
  );
}

Main.propTypes = {
  sections: PropTypes.object.isRequired,
  blogPosts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Main;
