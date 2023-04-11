import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 40px;
  background-color: ${(props) => props.backgroundColor || "#fb8f1d"};
  border: none;
  padding: 8px;
  border-radius: 5px;
  color: ${(props) => props.color || "#fff"};
  border: 1px solid #fb8f1d;
`;

const Button = ({ text, backgroundColor, color }) => {
  return (
    <>
      <StyledButton backgroundColor={backgroundColor} color={color}>
        {text}
      </StyledButton>
    </>
  );
};

export default Button;
