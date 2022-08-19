import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoWrap>
      <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" />
    </LogoWrap>
  );
};

const LogoWrap = styled.div`
  display: flex;
  img {
    width: 50px;
  }
`;

export default Logo;
