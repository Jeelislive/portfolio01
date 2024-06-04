import type { NextPage } from "next";

const Project: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" className="active" data-filter="all">
                All
              </button>
              <button type="button" data-filter="graphics-design">
                Graphics Design
              </button>
            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/todo.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>TODO App Using MERN</h4>
                  <p>This is a TODO app built with the MERN stack.</p>
                  <a href="https://github.com/Jeelislive/mytodoapp" target="_blank" className="github-link">
                    <i className="fa fa-github"></i> View Code
                  </a>
                  <a href="https://mytodoapp-mu.vercel.app/" target="_blank" className="github-link">
                    <i className="fa fa-github"></i> Live
                  </a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/reactrouter.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Website Using React Router</h4>
                  <p>A website demonstrating navigation using React Router.</p>
                  <a href="https://github.com/Jeelislive/ReactRouter07" target="_blank" className="github-link">
                    <i className="fa fa-github"></i> View Code
                  </a>
                   <a href="https://react-router07.vercel.app/" target="_blank" className="github-link">
                    <i className="fa fa-github"></i> Live
                  </a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/currency.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Currency Converter</h4>
                  <p>A currency converter app built with JavaScript.</p>
                  <a href="https://github.com/Jeelislive/CurrencyConverter" target="_blank" className="github-link">
                    <i className="fa fa-github"></i> View Code
                  </a>
                  <a href="https://currency-converter-snowy-seven.vercel.app/" target="_blank" className="github-link">
                    <i className="fa fa-github"></i> Live
                  </a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="graphics-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/animated.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Animated Website</h4>
                  <p>An animated website using CSS and JavaScript animations.</p>
                  <a href="https://github.com/Jeelislive/Animated-Website" target="_blank" className="github-link">
                    <i className="fa fa-github"></i> View Code
                  </a>
                  <a href="https://animated-website-psi.vercel.app/" target="_blank" className="github-link">
                    <i className="fa fa-github"></i> Live
                  </a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
