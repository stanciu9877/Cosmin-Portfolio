import React from "react";
import { MdDesktopMac, MdPhonelinkSetup, MdPhoto } from "react-icons/md";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allitems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allitems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle
          heading="Skills"
          subheading="What value can i bring to the table"
        />
        <div className="services__allitems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I try to improve my HTML/CSS and Javascrip doing real world projects in ReactJs"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="I develop mobile applications. I create mobile app with eye catching ui."
          />
          <ServicesSectionItem
            icon={<MdPhoto />}
            title="Photoshop Edit"
            desc="Some experience in desinging web sitess using PSD files"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
