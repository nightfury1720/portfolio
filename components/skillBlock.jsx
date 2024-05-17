import styled from "styled-components";

const SkillBlock = ({ heading, body }) => {
  return (
    <ResponsiveBlock>
      <SkillTitleWrapper>
        <IconWrapper>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
          >
            <path
              d="M18,34.111l-1.667,6.667L14.111,43H31.889l-2.222-2.222L28,34.111M3,25.222H43M7.444,34.111H38.556A4.444,4.444,0,0,0,43,29.667V7.444A4.444,4.444,0,0,0,38.556,3H7.444A4.444,4.444,0,0,0,3,7.444V29.667A4.444,4.444,0,0,0,7.444,34.111Z"
              transform="translate(-2 -2)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </IconWrapper>
        <SkillTitle>{heading}</SkillTitle>
      </SkillTitleWrapper>

      <SymbolH3>&lt;h3&gt;</SymbolH3>
      <SkillBody>
        <LeftPicBody>
          <Ruler />
        </LeftPicBody>
        <RightPicBody>{body}</RightPicBody>
      </SkillBody>
      <SymbolH3>&lt;/h3&gt;</SymbolH3>
    </ResponsiveBlock>
  );
};
const Ruler = styled.div`
  width: 1px;
  background-color: #5e565e;
  margin-left: 4px;
  height: 100%;
`;

const SymbolH3 = styled.div`
  font-size: 16px;
  color: #5e565e;
`;

const LeftPicBody = styled.div`
  padding: 0px 8px 0px 8px;
`;
const RightPicBody = styled.div``;
const IconWrapper = styled.div`
  padding-right: 8px;
`;
const SkillTitle = styled.div`
  align-self: center;
  font-size: 1.5vw;
  line-height: 1;
  width: 100%;
  word-wrap: break-word;
  @media (max-width: 850px) {
    font-size: 24px;
  }
  @media (max-width: 350px) {
    font-size: 16px;
  }
`;

const SkillBody = styled.div`
  display: flex;
  font-size: 16px;
`;
const SkillTitleWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const ResponsiveBlock = styled.div`
  flex: 1; /* Make blocks stretch to fill the available space */
  border: 1px solid #00ff08;;
  box-sizing: border-box;
  padding: 0.5em 0.5em 0.5em;
  width: 33%;
  /* Adjust styles for small screens */
  @media (max-width: 850px) {
    margin-bottom: 10px; 
    width: 100%;
  }
`;
export default SkillBlock;
