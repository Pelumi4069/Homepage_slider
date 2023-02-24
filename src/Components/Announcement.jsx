import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #AF734F;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping and gift on Orders Over $500</Container>;
};

export default Announcement;