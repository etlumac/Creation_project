import "./App.css";
import video from "../Images/production_id_3923315.mp4";

import one from "../Images/photo_2024-01-21_10-48-33.jpg";
import two from "../Images/russia1.jpg";
import three from "../Images/moscow.jpg";

export const Add = () => {
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
          <div class="video-bg">
            <video
              src={video}
              type="video/mp4"
              controls="controls"
              autoplay="true"
              muted="true"
              loop="true"
            />
            <div class="effects"></div>
            <div class="video-bg__content">
              <h1>Russia</h1>
            </div>
          </div>
        </section>
        <hr></hr>

        <section class="info">
          <h2>Information about contry</h2>
          <section class="services">
            <div id="our-services-1" class="our-services">
              <h3>Geography and Culture</h3>
              <p>
                Russia is the largest country in the world, spanning eight time
                zones and offering incredible diversity in nature. From vast
                steppes in the south to harsh Arctic lands in the north, Russia
                is home to unique cultural landmarks, including the Hermitage,
                Red Square, and a rich literary and artistic heritage.
              </p>
            </div>
            <div id="our-services-2" class="our-services">
              <h3>History and Traditions</h3>
              <p>
                Russia boasts a rich history covering multiple epochs, from
                ancient times to the present day. The country is renowned for
                its traditional cuisine, featuring dishes like blini and
                borscht, as well as unique celebrations such as Maslenitsa and
                Victory Day. Russian literature, music, and painting have also
                made an indelible mark on world culture.
              </p>
            </div>
          </section>

          <section class="services">
            <div id="our-services-1" class="our-services">
              <h3>Natural Wonders</h3>
              <p>
                Russia is blessed with breathtaking natural wonders, including
                the stunning Lake Baikal, the deepest freshwater lake on Earth.
                The Caucasus Mountains offer spectacular landscapes, and the
                Kamchatka Peninsula is home to diverse ecosystems and
                awe-inspiring volcanoes.
              </p>
            </div>
            <div id="our-services-2" class="our-services">
              <h3>Innovation and Technology</h3>
              <p>
                Beyond its rich history, Russia is a hub of innovation and
                technology. The country has made significant contributions to
                space exploration, with achievements such as launching the first
                artificial satellite, Sputnik. Russian scientists and engineers
                continue to play a vital role in various scientific fields.
              </p>
            </div>
          </section>
        </section>

        <hr></hr>
        <section>
          <h2>Vizualization</h2>

          <div class="slider-wrapper">
            <div class="slider">
              <img id="slide-1" src={one} />
              <img id="slide-2" src={two} />
              <img id="slide-3" src={three} />
            </div>
            <div class="slider-nav">
              <a href="#slide-1"></a>
              <a href="#slide-2"></a>
              <a href="#slide-3"></a>
            </div>
          </div>
        </section>
        <hr></hr>

        <section class="useful_sources">
          <h2>Information</h2>
          <div>
            Explore more about Russia through these useful resources:
            <ul>
              <li>
                <a href="https://tourism.gov.ru/en/">
                  Official Tourism Website
                </a>
              </li>
              <li>
                <a href="https://www.history.com/topics/european-history/russia-timeline">
                  Russian History Overview
                </a>
              </li>
              <li>
                <a href="https://waytorussia.net/WhatIsRussia/">
                  Cultural Insights
                </a>
              </li>
              <li>
                <a href="https://www.justgorussia.co.uk/en/cuisine.html">
                  Traveler's Guide to Russian Cuisine
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
            <a href="algeria" id="podval">
              Algeria
            </a>
          </nav>
        </footer>
      </body>
    </>
  );
};

export default Add;
