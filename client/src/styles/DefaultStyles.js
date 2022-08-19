import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Button = styled.div`
  button,
  a {
    font-size: 16px;
    border: 1px solid ${(props) => props.theme.brandColor};
    padding: 8px 16px;
    border-radius: 6px;
    color: ${(props) => props.theme.brandColor};
    cursor: pointer;
    text-align: center;
    width: 100%;

    :hover {
      text-decoration: underline;
      background-color: ${(props) => props.theme.brandColor};
      color: ${(props) => props.theme.brandTextColor};
    }
  }
`;

export const ButtonClear = styled(Button)`
  button,
  a {
    background-color: transparent;
    border-color: transparent;
    color: ${(props) => props.theme.textColor2};

    :hover {
      background-color: ${(props) => props.theme.brandColor}20;
      color: ${(props) => props.theme.brandColor};
    }
  }
`;

export const ButtonFill = styled(Button)`
  button,
  a {
    background-color: ${(props) => props.theme.brandColor};
    color: ${(props) => props.theme.brandTextColor};
    :hover {
      text-decoration: none;
    }
  }
`;
