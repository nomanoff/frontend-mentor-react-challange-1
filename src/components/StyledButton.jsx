import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};

  font-size: ${(props) => (props.$large ? "3rem" : "1rem")};
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

const StyledRedButton = styled(StyledButton)`
  background: ${(props) => (props.$primary ? "red" : "white")};
  color: ${(props) => (props.$primary ? "white" : "red")};
  border: 2px solid red;
`;

export { StyledButton, StyledRedButton };
