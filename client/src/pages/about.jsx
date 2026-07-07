import Navbar from "../components/Navbar";

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
          Axios and the OMDb API.
        </p>
      </div>
    </>
  );
}

export default About;