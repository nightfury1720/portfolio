import styled from "styled-components";
import { useState, useEffect } from "react";
const Experience = ({ data }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (data.endYear === "Present") {
      setVisible(() => true);
    }
  }, []);
  return (
    <>
      <Card
        onClick={() => {
          setVisible((v) => !v);
        }}
      >
        <NameContainer>{data.role + " @ " + data.companyName}</NameContainer>
        <ActionContainer>
          <TermExperience>
            {data.startYear + " - " + data.endYear}
          </TermExperience>
          <Symbol>{!visible ? "+" : "-"}</Symbol>
        </ActionContainer>
      </Card>
      {visible && (
        <CardDetails>
          <RightContainer>
            <CompanyLogo src={data.companyLogo} alt={data.companyName} />
          </RightContainer>
          <LeftContainer>
            <LinkWrapper>
              <NameContainer>
                <StyledSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#01a659"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    clipRule="evenodd"
                  />
                </StyledSvg>
                {"  " + data.location}
              </NameContainer>

              <NameContainer>
                <StyledSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#01a659"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.4 5H5a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-6.4a3 3 0 0 1-1.7-1.6l-3 3A3 3 0 1 1 10 9.8l3-3A3 3 0 0 1 11.4 5Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M13.2 4c0-.6.5-1 1-1H20c.6 0 1 .4 1 1v5.8a1 1 0 1 1-2 0V6.4l-6.2 6.2a1 1 0 0 1-1.4-1.4L17.6 5h-3.4a1 1 0 0 1-1-1Z"
                    clipRule="evenodd"
                  />
                </StyledSvg>
                <Link href={data.companyUrl}>
                  {data.companyUrl.split("https://")[1]}
                </Link>
              </NameContainer>
            </LinkWrapper>

            <NameContainer>{data.description}</NameContainer>
            <TechWrapper>
              {data.skills.map((skill) => (
                <Tech key={skill}>{skill}</Tech>
              ))}
            </TechWrapper>
          </LeftContainer>
        </CardDetails>
      )}
    </>
  );
};

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
const TermExperience = styled.div`
  @media (max-width: 750px) {
    display: none;
  }
`;
const Tech = styled.div`
  background-color: #37ff1456;
  border-radius: 14px;
  padding: 2px 10px 2px 10px;
  margin: 0 10px 10px 0; /* Add margin to create space between Tech components */
`;
const CompanyLogo = styled.img`
  max-width: 100%;
  height: auto;
  filter: brightness(1.5);
  @media (max-width: 900px) {
    width: 60%;
  }
`;
const StyledSvg = styled.svg`
  margin-right: 6px;
`;
const Symbol = styled.div`
  display: flex;
  margin-left: 1em;
  align-items: center;
  font-size: 24px;
`;
const TechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* Wrap the Tech components onto a new line if they exceed the width */
  margin-top: 10px; /* Add some spacing between the Tech components and the other content */
`;

const Link = styled.a`
  color: white; /* Set the link color */
  text-decoration: none;
`;
const NameContainer = styled.div`
  height: auto;
  display: flex;
  padding-right: 20px;
`;
const ActionContainer = styled.div`
  display: flex;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  height: 30px;
  background-color: #01a659;
  padding: 1em;
  margin-bottom: 1em;
  border-radius: 6px;
  overflow: hidden; /* Prevent button overflow */
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  background-color: #014107;
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
  border-radius: 6px;
  overflow: hidden;
  flex-direction: column; /* By default, CardDetails renders first in column layout */

  @media (min-width: 900px) {
    flex-direction: row-reverse;
  }

  @media (max-width: 500px) {
    width: 98%;
  }
`;

const LeftContainer = styled.div`
  width: 100%; /* Take full width in column layout */
  display: block;

  @media (min-width: 900px) {
    width: 75%; /* Take 75% width in row layout */
  }
`;

const RightContainer = styled.div`
  width: 100%; /* Take full width in column layout */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em; /* Add margin between RightContainer and LeftContainer in column layout */

  @media (min-width: 900px) {
    width: 25%; /* Take 25% width in row layout */
    margin-bottom: 0; /* Remove margin in row layout */
  }
`;

export default Experience;
