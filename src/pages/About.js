import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Stanciu Cosmin</span>
              </p>
              <h2 className="about__heading">A freelance Web developer</h2>
              <div className="about__info">
                <PText>
                  I am from Bucharest, Romania. Initially, I started my path as
                  a Mechanical Engineer but now I want to pursue a career in web
                  development.
                  <br /> <br />
                  I was familiar with basics of coding since high school, where
                  i learnt the basics of c++. The passion for web development
                  came last year, when i saw what future i had as a mechanical
                  engineer, an realized that it is not what i want.
                  <br />
                  <br />
                  For me, creating an engaging user experience, and seeing how
                  different design options change the behaviour of the end user
                  is much more fulfilling than what I did previously.
                </PText>
              </div>
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={["Liceul Al.I.Cuza : matematica-infromatica"]}
              />
              <AboutInfoItem
                title="College"
                items={[
                  "Politehnica Bucuresti : FILS - Inginerie Mecanica(Engleza)",
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={["HTML", "CSS", "JavaScript", "REACT"]}
              />

              <AboutInfoItem
                title="Design"
                items={["Photoshop", "Figma", "Illustrator"]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
