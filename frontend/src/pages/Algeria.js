import React from 'react';
import './App.css'
import video from '../Images/production_id_3711794.mp4'

import one from '../Images/1.jpg'
import two from '../Images/2.jpg'
import three from '../Images/3.jpg'
export const Alg = () => {
  return (
    <>
      <body>
        <header>
          <nav>
            <h1>Созидание</h1>
            <section className="head_options">
              <a href="/home">Home</a>
              <a href="russia">Russia</a>
              <a href="algeria">Algeria</a>
              <a href="FAQ">FAQ</a>
            </section>
          </nav>
        </header>
        <hr></hr>
        <section>
          <div className="video-bg">
            <video
              src={video}
              type="video/mp4"
              controls="controls"
              autoPlay="true"
              muted="true"
              loop="true"
            />
            <div className="effects"></div>
            <div className="video-bg__content">
              <h1>Algeria</h1>
            </div>
          </div>
        </section>
        <hr></hr>

        <section className="info">
          <h2>Information about the Country</h2>
          <section className="services">
            <div id="our-services-1" className="our-services">
              <h3>Geography and Culture</h3>
              <p>
                Algeria, with its diverse landscapes, is situated in North
                Africa. From the vast Sahara Desert to the Mediterranean
                coastline, the country boasts a rich cultural heritage
                influenced by its Berber, Arab, and French roots. Historical
                sites like the ancient city of Timgad and the Casbah of Algiers
                showcase Algeria&apos;s unique blend of history and culture.
              </p>
            </div>
            <div id="our-services-2" className="our-services">
              <h3>History and Traditions</h3>
              <p>
                Algeria has a compelling history, marked by periods of Berber
                kingdoms, Arab rule, and French colonization. The country gained
                independence in 1962, leading to the celebration of events like
                Independence Day. Algerian cuisine reflects the diverse cultural
                influences, offering delicious dishes like couscous and tagines.
                Traditional music and dance, such as Rai, add vibrancy to
                Algerian traditions.
              </p>
            </div>
          </section>

          <section className="services">
            <div id="our-services-1" className="our-services">
              <h3>Natural Wonders</h3>
              <p>
                Algeria is home to natural wonders like the Tassili n&apos;Ajjer
                National Park, known for its prehistoric rock art and unique
                geological formations. The Ahaggar Mountains offer a glimpse
                into the country&apos;s geological and cultural history.
              </p>
            </div>
            <div id="our-services-2" className="our-services">
              <h3>Innovation and Heritage</h3>
              <p>
                Modern Algeria is making strides in various fields, from science
                to literature. The country values its literary heritage, with
                notable authors like Albert Camus. Algeria&apos;s traditional
                music and dance are celebrated globally, showcasing the richness
                of its cultural expression.
              </p>
            </div>
          </section>
        </section>
        <hr></hr>

        <section>
          <h2>Vizualization</h2>

          <div className="slider-wrapper">
            <div className="slider">
              <img id="slide-1" src={one} />
              <img id="slide-2" src={two} />
              <img id="slide-3" src={three} />
            </div>
            <div className="slider-nav">
              <a href="#slide-1"></a>
              <a href="#slide-2"></a>
              <a href="#slide-3"></a>
            </div>
          </div>
        </section>

        <hr></hr>
        <section className="useful_sources">
          <h2>Information</h2>
          <div>
            Explore more about Algeria through these useful resources:
            <ul>
              <li>
                <a href="https://www.mfa.gov.dz/discover-algeria/tourism">
                  Official Tourism Website
                </a>
              </li>
              <li>
                <a href="https://www.britannica.com/topic/history-of-Algeria">
                  Algerian History Overview
                </a>
              </li>
              <li>
                <a href="#">Cultural Insights</a>
              </li>
              <li>
                <a href="https://jesseatsandtravels.com/how-to-eat-like-an-algerian/">
                  Traveler&apos;s Guide to Algerian Cuisine
                </a>
              </li>
            </ul>
          </div>
        </section>

        <footer>
          <nav>
            <a href="home" id="podval">
              Home
            </a>
            <p>© 2023 Your Website. All rights reserved.</p>
            <a href="russia" id="podval">
              Russia
            </a>
          </nav>
        </footer>
      </body>
    </>
  )
}

export default Alg
