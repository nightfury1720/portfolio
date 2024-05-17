import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Heading } from "..";
const BlogFeature = ({ blogs = [] }) => {
  return (
    <>
      <CustomHeading>My Thoughts</CustomHeading>
      <BlogContainer> Hello </BlogContainer>
    </>
  );
};

const CustomHeading = styled(Heading)`
  margin-top: 5%;
`;

const BlogContainer = styled.div`
  justify-content: center; /* Horizontally center align */
  align-items: center; /* Vertically center align */
`;
export default BlogFeature;
