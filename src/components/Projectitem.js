import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjectStyle = styled.div`
  .projectitem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectitem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectitem__title {
    font-size: 2.2rem;
  }
  a {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e69d46;

    &:hover {
      text-decoration: underline;
      color: #f13a5f;
    }
  }
  .projectitem__desc {
    font-size: 1.6rem;
    font-family: "RobotoMono Regular";
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectitem__img {
      height: 358px;
    }
  }
`;

export default function Projectitem({ image, title, desc, host = "#" }) {
  return (
    <ProjectStyle>
      <div>
        <Link to="/projects" className="projectitem__img">
          <img src={image} alt="project img" />
        </Link>
        <div className="projectitem__info">
          <h3 className="projectitem__title">{title}</h3>

          <p className="projectitem__desc">{desc}</p>

          <a href={host} target="_blank" rel="noreferrer">
            {host === "#" ? "-" : "Site"}
          </a>
        </div>
      </div>
    </ProjectStyle>
  );
}
