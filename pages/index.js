import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import SkillBlock from "../components/skillBlock";
import Experience from "../components/experience";
import FiltersTab from "../components/filter";
import Contacts from "../components/contacts";
import ScrollDownSVG from "../components/scrollDown";

gsap.registerPlugin(MotionPathPlugin);

export default function Home() {
  const birdRef = useRef(null);
  const [changes, setChanges] = useState(false);
  const [isOpenWing, setIsOpenWing] = useState(true);
  const textRefs = useRef([]);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // name animation
  useGSAP(() => {
    const textElements = textRefs.current;
    if (!textElements.length) return;

    const timeline = gsap.timeline();

    textElements.forEach((textElement, index) => {
      timeline.to(textElement, {
        rotationX: 360,
        duration: 0.4,
        ease: "none",
        delay: index * 0.001,
        color: "#00ff08",
      });
    });
  }, []);

  useEffect(() => {
    const toggleWings = () => {
      setIsOpenWing((prev) => !prev);
      const randomNumber = getRandomNumber(200, 1000);
      setTimeout(toggleWings, randomNumber);
    };
    if (changes) {
      var id = window.setTimeout(function () {}, 0);

      while (id--) {
        window.clearTimeout(id); // will do nothing if no timeout with id is present
      }
    } else {
      toggleWings(); // Start toggling immediately
    }

    return () => clearTimeout(toggleWings); // Cleanup on unmount
  }, [changes]);

  const calculateShift = (curr, target) => {
    // const currRect = curr.getBoundingClientRect();
    // const targetRect = target.getBoundingClientRect();
    // const targetX = targetRect.left + targetRect.width / 2;
    // const targetY = targetRect.top;
    // const currX = currRect.left + currRect.width / 2;
    // const currY = currRect.top + currRect.height / 2;

    const delta = MotionPathPlugin.getRelativePosition(
      curr,
      target,
      [0, 0],
      [0, 0]
    );
    // console.log(currX, currY, targetX, targetY, shiftX, shiftY, delta);
    return delta;
  };

  //bird animation
  useGSAP(() => {
    const dx = window.innerWidth * 0.2;
    const dy = window.innerHeight * 0.2;
    const birdElement = birdRef.current;
    const nameElement = textRefs.current[11];
    const delta = calculateShift(birdElement, nameElement);

    const tweening = (dx, dy) => {
      gsap.to(birdElement, {
        x: gsap.utils.random(-dx, dx),
        y: gsap.utils.random(-dy, dy),
        scale: gsap.utils.random(0.2, 0.8),
        duration: 4,
        ease: "power1.inOut",
        onComplete: tweening,
        onCompleteParams: [dx, dy],
      });
    };

    // console.log("Chnages: ", delta, changes);
    if (changes === true) {
      gsap.to(birdElement, {
        x: "+=" + delta.x,
        y: "+=" + delta.y,
        scale: 1,
        duration: 3,
        ease: "power1.inOut",
      });
      gsap.to(nameElement, {
        duration: 0.05,
        x: "-=2",
        rotation: 2,
        transformOrigin: "center center",
        repeat: 10,
        yoyo: true,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to(nameElement, {
            duration: 0.2,
            x: 0,
            rotation: 0,
            ease: "power1.inOut",
          });
        },
      });
    } else tweening(dx, dy);
  }, [changes]);

  const handleOnClick = () => {
    setChanges((count) => {
      gsap.killTweensOf(birdRef.current);
      return !count;
    });
  };

  const work = {
    description:
      "I love to build complex stuff that pushes me to learn new things. I have worked with React, Blockchain, Websockets, Elixir and more. Hare are some of my cool projects check them out",
    featuredWork: {
      name: "Chatty",
      imageLink: "/img/chatty.png",
      gitLink: "https://github.com/nightfury1720/chatty",
    },
    projects: [
      {
        name: "Builder",
        imageLink: "/img/builderProd.png",
        demoLink: "https://builderprod.vercel.app/",
        gitLink: "https://github.com/nightfury1720/builder",
        shortdesc: "Website Builder & Agency Management",
        description:
          "It Provides agency to manage their task-kanban board, team members, access-control and a Website Builder where you can go and build your own Drag and Drop website",
        skills: ["Next",  "Javascript", "Postgres", "NodeJs", "Stripe"],
      },
      {
        name: "Chatty",
        imageLink: "/img/chatty.png",
        gitLink: "https://github.com/nightfury1720/chatty",
        shortdesc: "Chatting App",
        description:
          "Real-time messaging app featuring Socket.IO for creating channels, selecting avatars, and enabling messaging functionality.",
        skills: ["React", "WebSockets", "Javascript", "MongoDb", "NodeJs"],
      },
      {
        name: "Memory Lane",
        imageLink: "/img/memoryLane.png",
        gitLink: "https://github.com/nightfury1720/Memory_lane_Project",
        shortdesc: "Social Media Web App",
        description:
          " A full-stack social media app for sharing life events with user authorization, allowing likes, reactions and comments.",
        skills: ["React", "Javascript", "MongoDb", "NodeJs"],
      },
      // {
      //   name: "URL Shortener",
      //   imageLink: "/img/urlShortener.png",
      //   gitLink: "https://github.com/nightfury1720/Url-Shortener",
      //   shortdesc: "Shortening URL",
      //   description:
      //     "Developed a URL shortener app with an integrated rate limiter for enhanced performance and user control.",
      //   skills: ["React", "Javascript", "MongoDb", "NodeJs"],
      // },
      {
        name: "Going Nuts",
        imageLink: "/img/goingNuts.png",
        gitLink: "https://www.goingnuts.in",
        shortdesc: "WordPress Website",
        description:
          "NewsMonkey(Dailynewsapp) featuring categorized content, search, infinitescrolling, and hot reload functionality.",
        skills: ["WordPress"],
      },
    ],
  };

  const experience = [
    {
      role: "Software Engineer",
      location: "Bangalore, India",
      companyName: "Sapiens",
      companyUrl: "https://sapiens.com",
      startYear: "June, 2023",
      endYear: "Present",
      description: [
        "Created a NextJS based configurable front-end component library of 100+ components used across the codebase.",
        "Set up a MongoDB server to host the frontend configurations for the app decreasing latency by 0.76 secs.",
        "Added security measures for headers and cookies to counter potential attacks on the website such as XSS.",
      ],
      skills: ["Javascript", "Typescript", "NextJs", "MongoDb"],
      companyLogo:
        "https://sapiens.com/wp-content/uploads/2022/05/sapiens_main_logo_website.png",
    },
    {
      role: "Software Engineer Intern",
      location: "Bangalore, India",
      companyName: "Gojek",
      companyUrl: "https://www.gojek.io",
      startYear: "June, 2022",
      endYear: "August, 2022",
      description: [
        "Created an automated system that archives old data from PostgreSQL and Redis in regular intervals.",
        "Extracted a part of a data-heavy service to create an independent system resulting in optimizing load on the server.",
        "Migrated search look-ups from Redis to ElasticSearch resulting in faster query time by 40%.",
      ],
      skills: ["Elixir", "Docker", "Redis", "ElasticSearch"],
      companyLogo: "https://www.gojek.io/img/GojekLogo.svg",
    },
  ];

  return (
    <>
      <Bird ref={birdRef}>
        <svg
          id="bird01"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 117.75 28.61"
          width="117.75"
          height="28.61"
        >
          <g id="layer1" fill="#a3a3a3">
            {/* Define your bird SVG here */}
            {/* Open wing path */}
            <path
              id="open-wing"
              fill="red"
              d="M.28 12.2c-.94.75.64 1.28 2.32 1.78 3.47 1.07 8.2-.65 11.58-1.1 8.3-1.1 16.94.82 23.9 5.44.75.53 1.63 1.13 2.14 1.93 1.4 2.23.3 5.6 2.37 7.24 1.6 1.2 4 .3 5.7-.7 4.2-2.4 8.1-5.5 11.4-8.9 3.3-3.5 6.4-7.3 10.7-9.2 3.12-1.4 6.8-1.4 10.2-1.2C93.8 8 95.7 10 106.1 15c4.05.5 8.8.85 11.53-2.1-.77-.96-2.08-1.25-3.2-1.58C101.03 8.1 99.35 5.6 86.8.9c-4.38-1.63-9.5-.86-13.94.8-3.6 1.22-6.6 3.64-9.86 5.82-3.46 2.22-7.18 4.2-11.03 5.7-1.04.38-2.08.75-3.1.8-1.84.06-3.45-.98-5-1.82-7.1-3.86-15.17-5.6-23.25-5.3-4.1.12-8.05.82-11.97 2.03-1.9.6-3.8 1.28-5.64 2.16-.1.1-2.4.9-2.7 1.1z"
              style={{ display: isOpenWing ? "block" : "none" }}
            />
            {/* Closed wing path */}
            <path
              id="close-wing"
              fill="red"
              d="M3.46 20.5c-.34 1.15 1.26.67 2.92.13 3.46-1.1 5.86-7.16 8.38-9.47 6.18-5.64 16.5 3.07 23.45 7.7.8.52 1.7 1.12 2.2 1.92 1.4 2.22.3 5.6 2.4 7.24 1.7 1.23 4 .32 5.7-.64 4.3-2.42 8.1-5.47 11.5-8.9 3.4-3.45 10.4-5.66 14.9-7.04 3.3-1 6.3-2.77 8.9-.5 4.78 2.32 12.4 5.68 17.6 11.3 2.85 2.95 6.33 6.18 10.33 5.58 0-1.2-.84-2.25-1.5-3.2-8.5-11.1-4.66-6-14.7-15.82-3.4-3.28-9.44-8.55-14-7.36-3.7.86-15 4.43-18.26 6.6-4.85 2.3-9.07 6.18-14.12 6.5-1.8.07-3.42-.97-5-1.8-7.2-3.88-21-15.04-27.5-10.17C13.32 5 11 9.77 8.45 13.02c-1.22 1.58-2.37 3.22-3.4 5-.03.22-1.45 2.16-1.57 2.46z"
              style={{ display: !isOpenWing ? "block" : "none" }}
            />
          </g>
        </svg>
      </Bird>
      <Content>
        {" "}
        <Section id="intro">
          <HeroName onClick={handleOnClick}>
            <div ref={(el) => (textRefs.current[0] = el)}>S</div>
            <div ref={(el) => (textRefs.current[1] = el)}>u</div>
            <div ref={(el) => (textRefs.current[2] = el)}>r</div>
            <div ref={(el) => (textRefs.current[3] = el)}>a</div>
            <div ref={(el) => (textRefs.current[4] = el)}>j </div>
            <div style={{ width: "20px" }} /> {/* Add a space here */}
            <div ref={(el) => (textRefs.current[5] = el)}>D</div>
            <div ref={(el) => (textRefs.current[6] = el)}>w</div>
            <div ref={(el) => (textRefs.current[7] = el)}>i</div>
            <div ref={(el) => (textRefs.current[8] = el)}>v</div>
            <div ref={(el) => (textRefs.current[9] = el)}>e</div>
            <div ref={(el) => (textRefs.current[10] = el)}>d</div>
            <div ref={(el) => (textRefs.current[11] = el)}>i</div>
          </HeroName>
          <SubHeading>
            I am a Fullstack developer(Back-end Heavy), Currently learning go and trying to build up some open-source contributions in there.
            <br />
            <ScrollDownSVG />
          </SubHeading>
        </Section>
        <Section id="skills">
          <Heading>My Expertise</Heading>
          <ResponsiveBlocksContainer>
            <SkillBlock
              heading={"Backend Development"}
              body={
                "Dabbling with various patterns keeps me on my toes! I thrive on tackling complex problems. My main playgrounds are Node.js, Redis, RabbitMQ, and Firestore. I'm constantly exploring new challenges."
              }
            />
            <SkillBlock
              heading={"FronEnd Development"}
              body={
                "While I may not be a die-hard fan, I still rock it out with Next.js, React, Redux, and Phoenix. Crafting websites that I'm genuinely proud of is what drives me. Let's bring your ideas to life together!"
              }
            />
            <SkillBlock
              heading={"Side Quests"}
              body={
                "Currently following hussein's Course on OS and DBs, dabbling with blockchain and web3. 🤔 Thinking about the outer space makes me hungry for the unexplored which i try to channel in my work (unsuccessfully 🥲)"
              }
            />
          </ResponsiveBlocksContainer>

          <BackgroundImage
            src={
              "https://tamalsen.dev/wp-content/uploads/2021/12/hello-world-html-code-768x384.png"
            }
            alt={"background-img"}
          />
        </Section>
        <Section id="work">
          <WorkFeatureWrapper>
            <LeftWorkWrapper>
              <WorkTitle>
                My
                <br />
                Work
              </WorkTitle>
              <WorkDescription>{work.description}</WorkDescription>
            </LeftWorkWrapper>
            <RightWorkWrapper>
              <FeaturedImage src={work.featuredWork.imageLink} alt="featured" />
              <FeaturedDescription>
                <FeatureDescSvg
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 500 511.61"
                  width="42"
                  fill="white"
                >
                  <path
                    fillRule="nonzero"
                    d="m265.96 363.22 15.5-101.27c-45.53 4.53-96.07 15.77-138.72 45.89-47.72 33.69-86.32 91.71-98.25 191.8-.87 7.43-7.62 12.75-15.06 11.87-5.73-.68-10.21-4.86-11.55-10.14C7 468.76 1.42 437.95.25 409.03c-3.27-79.4 26.39-144.22 70.18-193.61 43.36-48.92 100.66-82.64 153.32-100.33 20.18-6.8 39.79-11.27 57.77-13.36L266.08 15.9c-1.32-7.34 3.57-14.38 10.91-15.69 4.07-.72 8.04.46 11 2.9l207.1 171.3c5.76 4.77 6.57 13.33 1.8 19.08l-1.54 1.59-207.06 180.39c-5.64 4.92-14.22 4.32-19.14-1.32a13.529 13.529 0 0 1-3.19-10.93z"
                  />
                </FeatureDescSvg>
                <br />
                Featured Project
                <br />
                <ProjectLink href={work.featuredWork.gitLink} alt="git">
                  {work.featuredWork.name}
                </ProjectLink>
                <br />
              </FeaturedDescription>
            </RightWorkWrapper>
          </WorkFeatureWrapper>
          <FiltersTab work={work} />
        </Section>
        <Section id="experience">
          <Heading>Professional Experience</Heading>
          <ExperienceWrapper>
            {experience.map((e, index) => (
              <Experience key={index} data={e} />
            ))}
          </ExperienceWrapper>
        </Section>
        <Section id="contact">
          <Contacts />
        </Section>
      </Content>
    </>
  );
}

const Bird = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  width: fit-content;
  height: fit-content;

  @media (max-width: 600px) {
    svg {
      width: 50px;
      height: 22px;
    }
  }
`;

const Content = styled.div``;

const ProjectLink = styled.a`
  color: #01a659; /* Set the link color */
  text-decoration: none;
  &:hover {
    color: #00ff08;
  }
`;
const FeaturedImage = styled.img`
  width: 400px;
  height: auto;
  filter: brightness(1.2);
  @media (max-width: 1300px) {
    width: 100%;
    align-self: center;
  }
`;

const FeatureDescSvg = styled.svg`
  @media (max-width: 1300px) {
    display: none;
  }
`;
const FeaturedDescription = styled.div`
  margin-top: -50px;
  margin-bottom: 100px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  align-self: flex-start;
  @media (max-width: 1300px) {
    margin-top: 0px;
    align-self: center;
  }
`;
const WorkTitle = styled.div`
  color: #00ff08;
  width: 100%;
  text-align: left;
  font-size: 60px;
  font-weight: 600;
  line-height: 1;
  @media (max-width: 850px) {
    font-size: 40px;
  }
`;
const WorkDescription = styled.div`
  width: 100%;
  margin-top: 30px;
  text-align: left;
  font-size: 24px;
  font-weight: 300;
  line-height: 1;
  @media (max-width: 850px) {
    font-size: 16px;
  }
`;
const WorkFeatureWrapper = styled.div`
  display: flex;
  width: 75%;
  margin: 10px auto;
  flex-direction: row;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
const LeftWorkWrapper = styled.div`
  width: 45%;
  @media (max-width: 850px) {
    width: 100%;
  }
`;
const RightWorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 55%;
  padding-left: 20px;
  @media (max-width: 850px) {
    width: 100%;
  }
`;
const ExperienceWrapper = styled.div`
  max-width: 600px;
  justify-content: space-between;
  margin: 20px auto;
  @media (max-width: 750px) {
    width: 80%;
  }
`;
const HeroName = styled.div`
  display: flex;
  justify-content: center; /* Horizontally center align */
  align-items: center; /* Vertically center align */
  width: 100%;
  margin: 0px auto;
  margin-top: 20%;
  text-align: center;
  font-size: 100px;
  font-weight: 600;
  @media (max-width: 850px) {
    flex-wrap: wrap;
    font-size: 60px;
  }
  @media (max-width: 500px) {
    flex-wrap: wrap;
    font-size: 40px;
  }
`;
export const Heading = styled.div`
  color: #00ff08;
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  margin-top: 10%;
  @media (max-width: 650px) {
    font-size: 35px;
  }
`;
const SubHeading = styled.div`
  display: block;
  text-align: center;
  width: 60%; /* Adjust this width as needed */
  font-size: 24px;
  font-weight: 400;
  margin: 0% auto 15%; /* Center align horizontally */
`;
export const Section = styled.section`
  width: 100%;
  align-items: center;
  font-size: 60px;
  color: #ffffff;
`;
const ResponsiveBlocksContainer = styled.div`
  display: flex;
  margin: 20px auto;
  width: 70%; /* Adjust the maximum width of the container */

  /* Change flex direction to column when screen size is below 600px */
  @media (max-width: 850px) {
    flex-direction: column;
    width: 80%;
  }
`;
const BackgroundImage = styled.img`
  display: block; /* Ensures the image is displayed as a block element */
  margin: -50px auto; /* Sets auto margins to horizontally center the image */
  width: 40%; /* Adjust the width of the image as needed */
  opacity: 0.5; /* Adjust the opacity of the background image */
  z-index: -2;
  position: relative;
  @media (max-width: 850px) {
    width: 80%;
  }
`;
