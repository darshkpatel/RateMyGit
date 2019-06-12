import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 4.5em;
  text-align: center;
  color: white;
`;
export const FormTitle = styled.h1`
  font-size: 1.5em;
  color: black;
  max-width: 500px;
  margin: auto;
  padding:1em;
`;

export const Wrapper = styled.section`
  padding: 4em;
  background: black;
`;

export const Form = styled.form`
  max-width: 500px;
  margin: auto;
  align-self: center;
  align-items: center;
`;

export const Input = styled.input`
  font-size: 16px;
  border: solid 1px lightgrey;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
`;

export const Button = styled.button`
cursor: pointer;
background: transparent;
font-size: 16px;
border-radius: 3px;
color: ${props => (props.primary ? 'violet' : '#1fb6ff')};
border: ${props =>
  props.primary ? '2px solid violet' : '2px solid #1fb6ff'};
margin: 0 1em;
padding: 0.25em 1em;
transition: 0.5s all ease-out;

&:hover {
  color: white;
  background-color: ${props =>
    props.primary ? 'violet' : '#1fb6ff'};
}
`;

