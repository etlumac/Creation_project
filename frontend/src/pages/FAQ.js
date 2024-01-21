import React, { useEffect } from "react";
import "./App.css";

export const FAQ = () => {
  useEffect(() => {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var pannel = this.nextElementSibling;

        if (pannel.style.display === "block") {
          pannel.style.display = "none";
        } else {
          pannel.style.display = "block";
        }
      });
    }
  }, []);

  return (
    <>
      <body>
        <header>
          <nav>
            <h1>Созидание</h1>
            <section class="head_options">
              <a href="/home">Home</a>
              <a href="russia">Russia</a>

              <a href="algeria">Algeria</a>

              <a href="FAQ">FAQ</a>
            </section>
          </nav>
        </header>
        <hr></hr>

        <section>
          <div className="wrapper">
            <h2>Frequantly Asked Questions</h2>
            <p>Education</p>

            <div className="faq">
              <button className="accordion">
                Q: What opportunities are available for students from Algeria to
                study in Russia?
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="pannel">
                <p>
                  A: Explore various scholarship programs, exchange programs,
                  and university admissions for Algerian students in Russia.
                </p>
              </div>
            </div>

            <div className="faq">
              <button className="accordion">
                Q: Are there language requirements for studying in either
                country?
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="pannel">
                <p>
                  A: Check language proficiency requirements for academic
                  programs and any language support services available for
                  students.
                </p>
              </div>
            </div>

            <div className="faq">
              <button className="accordion">
                Q: Are there any collaborative research programs between Russian
                and Algerian universities?
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="pannel">
                <p>
                  A: Yes, there are collaborative research initiatives promoting
                  academic partnerships and joint projects between institutions
                  in both countries.
                </p>
              </div>
            </div>

            <div className="faq">
              <button className="accordion">
                Q: How can I apply for scholarships to study in Algeria if I am
                a Russian student?
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="pannel">
                <p>
                  A: Information on scholarship programs, eligibility criteria,
                  and application processes can be found on our website.
                </p>
              </div>
            </div>

            <p>Economics</p>

            <div className="faq">
              <button className="accordion">
                Q: What economic initiatives exist between Russia and Algeria?
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="pannel">
                <p>
                  A: Learn about bilateral economic agreements, trade
                  partnerships, and investment opportunities fostering economic
                  collaboration.
                </p>
              </div>
            </div>

            <div className="faq">
              <button className="accordion">
                Q: How can businesses from Algeria explore opportunities in the
                Russian market?
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="pannel">
                <p>
                  A: Information on trade regulations, investment climate, and
                  support services for Algerian businesses looking to enter the
                  Russian market.
                </p>
              </div>
            </div>

            <div className="faq">
              <button className="accordion">
                Q: Are there forums or events for networking between Russian and
                Algerian entrepreneurs?
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="pannel">
                <p>
                  A: Stay updated on business forums, conferences, and events
                  facilitating networking and collaboration between business
                  communities in both countries.
                </p>
              </div>
            </div>

            <p>Culture</p>

            <div className="faq">
              <button className="accordion">
                Q: Are there cultural exchange programs between Russia and
                Algeria?
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="pannel">
                <p>
                  A: Discover cultural exchange initiatives, artistic
                  collaborations, and events promoting mutual understanding and
                  appreciation.
                </p>
              </div>
            </div>

            <div className="faq">
              <button className="accordion">
                Q: Can I find information on Russian language courses in Algeria
                or vice versa?
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="pannel">
                <p>
                  A: Explore language learning opportunities, cultural centers,
                  and language courses available for those interested in
                  learning Russian or Arabic.
                </p>
              </div>
            </div>

            <div className="faq">
              <button className="accordion">
                Q: How can cultural institutions collaborate between Russia and
                Algeria?
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="pannel">
                <p>
                  A: Information on partnerships, exhibitions, and cultural
                  events fostering collaboration between museums, theaters, and
                  other cultural entities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <nav>
            <a href="russia" id="podval">
              Russia
            </a>
            <p>© 2023 Your Website. All rights reserved.</p>
            <a href="algeria" id="podval">
              Algeria
            </a>
          </nav>
        </footer>
      </body>
    </>
  );
};
export default FAQ;
