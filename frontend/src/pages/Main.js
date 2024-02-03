import React, { useEffect, useState } from 'react'
import './App.css'
import '../ChatBot/BotC.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCake } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram,
  faTelegram
} from '@fortawesome/free-brands-svg-icons'

import ActionProvider from '../ChatBot/ActionProvider.jsx';
import MessageParser from '../ChatBot/MessageParser.jsx';


import axios from 'axios'

import logo from '../Images/IMG_9533.jpg'
import forum from '../Images/russian-algerian-business-foruma-platform-for-establishing-business-contacts-and-promoting-trade-be-795838940.png'
import culture from '../Images/international-cultural-weekan-event-aimed-at-showcasing-the-culture-art-and-traditions-of-russia--651825025.png'
import education from '../Images/educational-exchangea-student-exchange-program-designed-to-deepen-knowledge-and-strengthen-ties-bet-552959897.png'

import one from '../Images/diplomatsour-team-includes-experienced-diplomats-who-can-assist-in-establishing-contacts-and-creat-787448927.png'
import two from '../Images/professional-consultantsour-consultants-provide-expert-opinions-and-support-for-successful-interact-606966667.png'
import three from '../Images/team-collaborationexperts-in-collaborationour-team-consists-of-highly-qualified-specialists-read-181015212.png'

import four from '../Images/cultural-tiesrussian-and-algerian-artists-musicians-and-writers-collaborate-to-create-unique-pro-550254195.png'
import five from '../Images/economic-partnershiprussia-and-algeria-are-actively-developing-trade-and-economic-cooperation-esp-42285790.png'
import six from '../Images/education-and-sciencethere-is-an-active-exchange-of-students-researchers-and-educators-between-r-27290424.png'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import config from '../ChatBot/config'

export const Ap = () => {
  const [isChatbotVisible, setChatbotVisibility] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const toggleChatbotVisibility = () => {
    setChatbotVisibility((prevVisibility) => !prevVisibility)
  }

  const initialFormData = JSON.parse(localStorage.getItem('formData')) || {
    name: '',
    email: '',
    message: ''
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post('/api/submitForm', formData)
      setShowSuccessMessage(true)
      setFormData({
        name: '',
        email: '',
        message: ''
      })

      localStorage.removeItem('formData')
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message)
      } else {
        console.error('Error submitting form:', error.message)
      }
    }
  }
  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showSuccessMessage])

  const scrollToContacts = () => {
    const contactsSection = document.getElementById('contacts')
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <body>
        <header>
          <nav>
            <h1>Creationmmm</h1>
            <section className="head_options">
              <a href="#about">About Us</a>

              <a href="russia">Russia</a>

              <a href="algeria">Algeria</a>

              <a href="FAQ">FAQ</a>

              <button className="black_button" id = "first" onClick={scrollToContacts}>Contacts</button>
            </section>
          </nav>
        </header>

        <hr></hr>

        <section id="about" className="about-us">
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
            <button className="black_button" onClick={scrollToContacts}>Contacts</button>
          </div>
          <img src={logo} alt="Logo" className="logo-small" />
        </section>

        <hr></hr>

        <section id="our-projects" className="our-projects">
          <h2>Our Projects</h2>

          <section className="projects">
            <section className="projects-n">
              <div className="project-column">
                <img src={forum} alt="Project 1" />
                <h4>Russian-Algerian Business Forum</h4>
                <p>
                  A platform for establishing business contacts and promoting
                  trade between entrepreneurs from Russia and Algeria.
                </p>
              </div>
            </section>

            <section className="projects-n">
              <div className="project-column">
                <h4>International Cultural Week</h4>
                <p>
                  An event aimed at showcasing the culture, art, and traditions
                  of Russia and Algeria.
                </p>
                <img src={culture} alt="Project 2" />
              </div>
            </section>

            <section className="projects-n">
              <div className="project-column">
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

        <section id="our-team" className="our-team">
          <h2>Our Team</h2>

          <section className="team-members">
            <section className="team-members-n">
              <div className="team-member-column">
                <img src={one} alt="Team Member 1" />
                <h4>Experts in Collaboration</h4>
                <p>
                  Our team consists of highly qualified specialists ready to
                  assist in the implementation of your projects.
                </p>
              </div>
            </section>

            <section className="team-members-n">
              <div className="team-member-column">
                <h4>Diplomats</h4>
                <p>
                  Our team includes experienced diplomats who can assist in
                  establishing contacts and creating a favorable atmosphere for
                  collaboration.
                </p>
                <img src={two} alt="Team Member 3" />
              </div>
            </section>

            <section className="team-members-n">
              <div className="team-member-column">
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

        <section id="our-services" className="our-services">
          <h2>Our Services</h2>
          <section className="services">
            <div className="services-block">
              <div className="App-header" style={{ position: 'fixed', bottom: 10, right: 10, boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 10px' }}>
              <button className={`btn_toggle ${isChatbotVisible ? 'bot-open' : ''}`} onClick={toggleChatbotVisibility} tabIndex = "0">
              Chat
              </button>
              {isChatbotVisible && (
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
              )}
            </div>
              <img src={five} alt="Team Member 1" />
              <h3>Economic Partnership</h3>
              <p>
                Russia and Algeria are actively developing trade and economic
                cooperation, especially in the fields of energy and agriculture.
              </p>
            </div>

            <div className="services-block">
              <img src={six} alt="Team Member 1" />
              <h3>Education and Science</h3>
              <p>
                There is an active exchange of students, researchers, and
                educators between Russian and Algerian universities.
              </p>
            </div>

            <div className="services-block">
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

        <section id="contacts" className="contacts">
          <section>
            <h2>Contacts</h2>

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

              <button className="black_button" type="submit">Submit</button>
            </form>
            {showSuccessMessage && (
              <div className="success-message">Form submitted successfully!</div>
            )}
          </section>
          <hr></hr>
          <section>
            <h3>Follow Us</h3>
            <section className="pils-links">
              <span className="pils">
                <a href="https://telegram.org">
                  <FontAwesomeIcon icon={faTelegram} /> Telegram
                </a>
              </span>
              <span className="pils">
                <a href="https://www.stolle.ru">
                  <FontAwesomeIcon icon={faCake} /> Pirog
                </a>
              </span>
              <span className="pils">
                <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjvtOrw5_aDAxWAPhAIHUFUDzcQFnoECA8QAQ&url=https%3A%2F%2Fwww.instagram.com%2Fetlumach%2F&usg=AOvVaw14KwZpMYviK7M8ynDzCbtq&opi=89978449">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
              </span>
              <span className="pils">
                <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjDwreg6PaDAxWjFBAIHR9YCdcQFnoECAcQAQ&url=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Dru_RU&usg=AOvVaw0KJoe-iJVCOSB6M_2aRrcK&opi=89978449">
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
  )
}

export default Ap
