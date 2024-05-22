import React, { useState } from "react";
import styled from "styled-components";

function Project({ data }) {
  const [hovered, setHovered] = useState(false);
  return (
    <ProjectWrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ImageWrapper>
        <Image src={data.imageLink} alt="Project Image" />
      </ImageWrapper>
      <DescriptionWrapper>
        <ProjectDescription>{data.name}</ProjectDescription>
        {hovered ? (
          <ProjectButton>
            <a href={data.gitLink}>Project Code</a>
            {data?.demoLink && (
              <a href={data.demoLink}>Demo Link</a>
            )}
          </ProjectButton>
        ) : (
          <ProjectDescription>{data.shortdesc}</ProjectDescription>
        )}
      </DescriptionWrapper>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  width: 30%;
  margin-bottom: 20px;
  padding: 0px 10px 0px 10px;
  @media (max-width: 1000px) {
    width: 40%;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-top: 75%; /* Maintains 1:1 aspect ratio (height = width) */
  position: relative;
  overflow: hidden;
`;
const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
  filter: brightness(1);
  &:hover {
    filter: brightness(0.5);
  }
`;

const DescriptionWrapper = styled.div`
  padding: 10px;
  font-size: 16px;
  height: fit-content;
  font-weight: 500;
  color: #9d9d9d;
  background-color: #112240;
`;

const ProjectDescription = styled.div`
  margin: 0px;
`;

const ProjectButton = styled.span`
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  a {
    color: #00ff08;
    text-decoration: none;
    &:hover {
      color: #00ff08;
    }
  }
`;


export default Project;
