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
    padding: 8px 16px;
    border-radius: 6px;
    color: ${(props) => props.theme.brandColor3};
    cursor: pointer;
    text-align: center;
    width: 100%;
    line-height: 1.5;
    transition: all 300ms;
    border: 1px solid ${(props) => props.theme.brandColor3};

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
    border: none;

    :hover {
      text-decoration: none;
      background-color: ${(props) => props.theme.brandColor1};
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

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const InputWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    height: 42px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.borderColor};
    padding: 10px 15px;
    outline: none;
    font-size: 16px;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.textColor1};
    font-family: 'Poppins';

    :focus {
      border-color: ${(props) => props.theme.brandColor3};
      box-shadow: 0 0 0 1px ${(props) => props.theme.brandColor3};
    }
  }

  p {
    font-size: 13px;
    margin-bottom: 5px;
  }

  textarea {
    height: 65px;
    resize: vertical;
  }
`;

export const BoxWrap = styled.div`
  section {
    background-color: ${(props) => props.theme.primary};
    box-shadow: ${(props) => props.theme.cardShadow};
    padding: 20px 30px;
    border-radius: 8px;
    margin-bottom: 20px;

    h2 {
      margin-bottom: 20px;
      font-weight: 600;
    }

    .coding label {
      margin-bottom: 10px;
    }
  }
`;
