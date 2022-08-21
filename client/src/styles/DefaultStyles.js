import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
  flex: 1;
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
    line-height: 1.5;
    transition: all 300ms;

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
    display: block;

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

export const ButtonDanger = styled(Button)`
  button,
  a {
    background-color: ${(props) => props.theme.dangerLight};
    color: #000;
    border: none;

    :hover {
      background-color: ${(props) => props.theme.danger};
      text-decoration: none;
      color: #000;
    }
  }
`;
export const ButtonDefault = styled(Button)`
  button,
  a {
    background-color: ${(props) => props.theme.borderColor};
    color: ${(props) => props.theme.textColor2};
    border: none;
    text-decoration: none;

    :hover {
      background-color: ${(props) => props.theme.shade2};
      text-decoration: none;
      color: ${(props) => props.theme.textColor2};
    }
  }
`;

export const Cancel = styled.div`
  right: 20px;
  top: 5px;

  button {
    font-size: 20px !important;
  }
`;
