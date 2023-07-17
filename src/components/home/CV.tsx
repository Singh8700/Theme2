import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

const CV=()=>{
  const Wrapper = styled.div`
  width:100%;
  margin-top: 2.5rem;
  gap:3rem;
  display:flex;
  justify-content: center;
  align-item:center;
  flex-wrap:wrap;
  font-weight:900;
  @media (max-width: ${({ theme }) => theme.media.smallMobile}) {
  flex-direction:column;
  }
  `
  return(
    <Wrapper>
      <a href="rohit@8700.pdf" download className="btn">Download CV</a>
    <Link to="/contact" className="btn btn-primary">
    Let's Talk
    </Link>
    </Wrapper>
    )
}
export default CV