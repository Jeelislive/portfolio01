
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/face.jpg"
              alt="jeel's Profile"
              className="shadow-dark"
            />
            
            <h1>Jeel Rupareliya</h1>
            <p>MERN Stack Devloper</p>
            <div className="social-links">
              <a href="https://x.com/rj_404_?t=r8bCwzWhHkklNfjcN2EhYQ&s=09" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://www.facebook.com/jeel.rupareliya.50?mibextid=ZbWKwL" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/Jeelislive" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/rjisalivee_/?next=%2F" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/jeelislive/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
