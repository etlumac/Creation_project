import React from "react";
import "./App.css";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCake } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import axios from "axios";

import logo from "../Images/IMG_9533.jpg";
import forum from "../Images/russian-algerian-business-foruma-platform-for-establishing-business-contacts-and-promoting-trade-be-795838940.png";
import culture from "../Images/international-cultural-weekan-event-aimed-at-showcasing-the-culture-art-and-traditions-of-russia--651825025.png";
import education from "../Images/educational-exchangea-student-exchange-program-designed-to-deepen-knowledge-and-strengthen-ties-bet-552959897.png";

import one from "../Images/diplomatsour-team-includes-experienced-diplomats-who-can-assist-in-establishing-contacts-and-creat-787448927.png";
import two from "../Images/professional-consultantsour-consultants-provide-expert-opinions-and-support-for-successful-interact-606966667.png";
import three from "../Images/team-collaborationexperts-in-collaborationour-team-consists-of-highly-qualified-specialists-read-181015212.png";

import four from "../Images/cultural-tiesrussian-and-algerian-artists-musicians-and-writers-collaborate-to-create-unique-pro-550254195.png";
import five from "../Images/economic-partnershiprussia-and-algeria-are-actively-developing-trade-and-economic-cooperation-esp-42285790.png";
import six from "../Images/education-and-sciencethere-is-an-active-exchange-of-students-researchers-and-educators-between-r-27290424.png";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import ActionProvider from '../ChatBot/ActionProvider';
import config from '../ChatBot/config';
import MessageParser from '../ChatBot/MessageParser';
export const Ap = () => {
  const initialFormData = JSON.parse(localStorage.getItem("formData")) || {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/submitForm", formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      localStorage.removeItem("formData");

      alert("Form submitted successfully!");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else {
        console.error("Error submitting form:", error.message);
      }
    }
  };

  const scrollToContacts = () => {
    const contactsSection = document.getElementById("contacts");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <body>
        <header>
          <nav>
            <h1>Созидание</h1>
            <section class="head_options">
              <a href="#about">About Us</a>

              <a href="russia">Russia</a>

              <a href="algeria">Algeria</a>

              <a href="FAQ">FAQ</a>

              <button onClick={scrollToContacts}>Contacs</button>
            </section>
          </nav>
        </header>
        <div className="scrollable-div">
            <header className="App-header">
              <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider} />
            </header>
            </div>
        <hr></hr>

        <section id="about" class="about-us">
          <div className="text-container">
            <h2>Conecting Russia and Algeria for mutual growth</h2>
            <p>
              The primary goal of the Russia-Algeria Cooperation Center is to
              encourage collaboration and mutual exchange between the two
              nations, with a focus enhancing economic development and fostering
              cultural understanding.
            </p>
            <p>
              The Russia-Algeria Cooperation Center aims to foster collaboration
              and exchange between the two countries, promoting economic
              development and cultural understanding.
            </p>
            <button onClick={scrollToContacts}>Contacs</button>
          </div>
          <img src={logo} alt="Logo" className="logo-small" />
        </section>

        <hr></hr>

        <section id="our-projects" class="our-projects">
          <h2>Our Projects</h2>

          <section class="projects">
            <section class="projects-n">
              <div class="project-column">
                <img src={forum} alt="Project 1" />
                <h4>Russian-Algerian Business Forum</h4>
                <p>
                  A platform for establishing business contacts and promoting
                  trade between entrepreneurs from Russia and Algeria.
                </p>
              </div>
            </section>

            <section class="projects-n">
              <div class="project-column">
                <h4>International Cultural Week</h4>
                <p>
                  An event aimed at showcasing the culture, art, and traditions
                  of Russia and Algeria.
                </p>
                <img src={culture} alt="Project 2" />
              </div>
            </section>

            <section class="projects-n">
              <div class="project-column">
                <img src={education} alt="Project 3" />
                <h4>Educational Exchange</h4>
                <p>
                  A student exchange program designed to deepen knowledge and
                  strengthen ties between Russian and Algerian universities.
                </p>
              </div>
            </section>
          </section>
        </section>

        <hr></hr>

        <section id="our-team" class="our-team">
          <h2>Our Team</h2>

          <section class="team-members">
            <section class="team-members-n">
              <div class="team-member-column">
                <img src={one} alt="Team Member 1" />
                <h4>Experts in Collaboration</h4>
                <p>
                  Our team consists of highly qualified specialists ready to
                  assist in the implementation of your projects.
                </p>
              </div>
            </section>

            <section class="team-members-n">
              <div class="team-member-column">
                <h4>Diplomats</h4>
                <p>
                  Our team includes experienced diplomats who can assist in
                  establishing contacts and creating a favorable atmosphere for
                  collaboration.
                </p>
                <img src={two} alt="Team Member 3" />
              </div>
            </section>

            <section class="team-members-n">
              <div class="team-member-column">
                <img src={three} alt="Team Member 2" />
                <h4>Professional Consultants</h4>
                <p>
                  Our consultants provide expert opinions and support for
                  successful interactions between Russia and Algeria.
                </p>
              </div>
            </section>
          </section>
        </section>

        <hr></hr>

        <section id="our-services" class="our-services">
          <h2>Our Services</h2>
          <section class="services">
            <div class="services-block">
              <img src={five} alt="Team Member 1" />
              <h3>Economic Partnership</h3>
              <p>
                Russia and Algeria are actively developing trade and economic
                cooperation, especially in the fields of energy and agriculture.
              </p>
            </div>

            <div class="services-block">
              <img src={six} alt="Team Member 1" />
              <h3>Education and Science</h3>
              <p>
                There is an active exchange of students, researchers, and
                educators between Russian and Algerian universities.
              </p>
            </div>

            <div class="services-block">
              <img src={four} alt="Team Member 1" />
              <h3>Cultural Ties</h3>
              <p>
                Russian and Algerian artists, musicians, and writers collaborate
                to create unique projects that reflect the cultural diversity of
                both countries.
              </p>
            </div>
          </section>
        </section>

        <hr></hr>

        <section id="contacts" class="contacts">
          <section>
            <h2>Contacs</h2>

            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Submit</button>
            </form>
          </section>
          <hr></hr>
          <section>
            <h3>Follow Us</h3>
            <section class="pils-links">
              <span class="pils">
                <a href="#">
                  <FontAwesomeIcon icon={faTelegram} /> Telegram
                </a>
              </span>
              <span class="pils">
                <a href="#">
                  <FontAwesomeIcon icon={faCake} /> Pirog
                </a>
              </span>
              <span class="pils">
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
              </span>
              <span class="pils">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
              </span>
            </section>

            <p> Address: Moscow, Tverskaya Street, 10r</p>
            <p>Phone: +7 123 456 7890</p>
            <p>Email: info@russialgeria.center</p>
          </section>
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

export default Ap;