import styled from "styled-components";
import { useEffect, useState } from "react";
import Project from "./project";
const FiltersTab = ({ work }) => {
  const [skillProjectMap, setSkillProjectMap] = useState({});
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [skillsArray, setSkillsArray] = useState([
    "All",
    "React",
    "WebSockets",
    "WordPress",
    "Web3"
  ]);

  useEffect(() => {
    const map = {};
    map["All"] = work?.projects;
    if(work.projects)
    work?.projects.forEach((project) => {
      project.skills.forEach((skill) => {
        if (!map[skill]) {
          map[skill] = [];
        };
        map[skill].push(project);
      });
    });
    setSkillProjectMap(() => map);
  }, [work]);
  // useEffect(() => {
  //   setSkillsArray(() => {
  //     Object.keys(skillProjectMap);
  //   });
  //   console.log(skillProjectMap, skillsArray,Object.keys(skillProjectMap), "in here");
  // }, [skillProjectMap]);
  return (
    <FiltersWrapper>
      <Filters>
        Filter by Skills:{"    "}
        {skillsArray
          ? skillsArray.map((skill) => (
              <FilterTypes
                key={skill}
                onClick={() => setSelectedSkill(skill)}
                selected={selectedSkill === skill}
              >
                {skill}
                <sup>{skillProjectMap[skill]?.length ?? 0}</sup>
              </FilterTypes>
            ))
          : null}
      </Filters>
      <ProjectsWrapper>
        {skillProjectMap[selectedSkill]
          ? skillProjectMap[selectedSkill].map((project) => (
              <Project data={project} key={project.name} />
            ))
          : null}
      </ProjectsWrapper>
    </FiltersWrapper>
  );
};

const ProjectsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const FilterTypes = styled.div`
  margin-left: 16px;
  display: flex;
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.selected ? "#00ff08" : "#8B8D8E")};
  &:hover {
    color: #00ff08;
  }
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  margin-bottom: 30px;
`;

const FiltersWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  margin-bottom: 20px;
  font-weight: 600;
  color: #01a659;
`;

export default FiltersTab;
