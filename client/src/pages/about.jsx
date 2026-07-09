import Navbar from "../components/navbar";

function About() {
  return (
    <>
      <Navbar />
      <div
        style={{
          color: "white",
          minHeight: "100vh",
          background: "#111",
          padding: "40px",
        }}
      >
        <h1>About CineVerse</h1>
        <p>
          CineVerse is a movie search website built using React, React Router,
          Axios,the OMDb API,express,node.js, and MongoDB. It allows users to search for movies, view details, and manage a personal watchlist. The application is designed to provide an intuitive and seamless experience for movie enthusiasts.
        </p>
      </div>
    </>
  );
}

export default About;