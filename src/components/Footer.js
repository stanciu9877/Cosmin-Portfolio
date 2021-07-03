import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyles = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div>
        <div className="container">
          <div className="footer__col1">
            <h1 className="footer__col1__title">Stanciu cosmin</h1>
            <PText>
              Consistently improving ReactJs developer, I am trying to trying to
              integrate into professional enviorment of web development
            </PText>
          </div>
          <div className="footer__col2">
            <FooterCol
              heading="Important Links"
              Links={[
                {
                  title: "Home",
                  path: "/",
                  type: "Link",
                },
                {
                  title: "About",
                  path: "/about",
                  type: "Link",
                },
                {
                  title: "Projects",
                  path: "/projects",
                  type: "Link",
                },
                {
                  title: "Contact",
                  path: "/contact",
                  type: "Link",
                },
              ]}
            />
          </div>
          <div className="footer__col3">
            <FooterCol
              heading="Contact Info"
              Links={[
                {
                  title: "Phone:0720895659",
                  path: "tel:+40720895659",
                },
                {
                  title: "stanciu.cosmin1997@gmail.com",
                  path: "mailto:stanciu.cosmin1997@gmail.com",
                },
                {
                  title: "Bucuresti, Romania",
                  path: "https://www.google.com/maps/place/Bulevardul+Theodor+Pallady,+Bucuresti",
                },
              ]}
            />
          </div>
          <div className="footer__col4">
            <FooterCol
              heading="Social Links"
              Links={[
                {
                  title: "Facebook",
                  path: "http://facebook.com",
                },
                {
                  title: "Instagram",
                  path: "http://instagram.com",
                },
                {
                  title: "GitHub",
                  path: "https://github.com/stanciu9877?tab=repositories",
                },
              ]}
            />
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <PText>© 2021 - Stanciu Cosmin</PText>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
}
