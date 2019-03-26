import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: #282828;
  color: #FF69B4;
  border: solid 1px #FF69B4;
  border-radius: 10px;
  padding: 6px 6px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: small;
  margin: 1rem;

  ${props =>
  props.primary &&
  css`
    color: #E5E500;
    border: solid 1px #E5E500;
  `};
`;

export const TextArea = styled.textarea`
  background-color: #282828;
  border-radius: 5px;
  color: #A2A2A2;
  resize: none;
  border: none;
  box-shadow: 0 4px 6px -5px hsl(0, 0%, 40%), inset 0px 4px 6px -5px hsl(0, 0%, 2%);
  font-size: 1rem;
  padding: .5rem;
  width: 100%;

  ${props =>
    props.caption &&
    css`
      font-weight: bold;
      margin-bottom: 1rem;
    `};

  ${props =>
    props.defaultHeight &&
    css`
      height: 150px;
    `};
  `;

  TextArea.defaultProps = {
    onInput: (evt) => {
      evt.target.style.height = 'initial';
      evt.target.style.height = `${evt.target.scrollHeight}px`;
    },
    spellCheck: false,
  }
