import styled from 'styled-components';

const Button = styled.button`
  width: 219px;
  height: 38px;
  border-radius: 10px;
  background-color: #00000040;
`;

const MenuButton = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default Button;