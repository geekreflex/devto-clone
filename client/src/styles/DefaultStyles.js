import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Button = styled.div`
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.brandColor};
  padding: 8px 16px;
  border-radius: 5px;
  color: ${(props) => props.theme.brandColor};

  :hover {
    text-decoration: underline;
    background-color: ${(props) => props.theme.brandColor};
    color: ${(props) => props.theme.brandTextColor};
  }
`;

export const ButtonClear = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  color: ${(props) => props.theme.textColor2};

  :hover {
    background-color: ${(props) => props.theme.brandColor}20;
    color: ${(props) => props.theme.brandColor};
  }
`;
