import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ForemLogo from '../icons/ForemLogo';
import { Container } from '../styles/DefaultStyles';

const Footer = () => {
  return (
    <FooterWrap className="footer">
      <Container>
        <Main>
          <p className="description">
            <Link to="#">DEV Community</Link> — A constructive and inclusive
            social network for software developers. With you every step of your
            journey.
          </p>
          <p>
            Built on <Link to="#">Forem</Link> — the
            <Link to="#">open source</Link> software that powers{' '}
            <Link to="#">DEV</Link> and other inclusive communities.
          </p>
          <p>
            Made with love and <Link to="#">Ruby on Rails</Link>. DEV Community
            © 2016 - 2022.
          </p>
          <div className="forem-logo">
            <ForemLogo />
          </div>
        </Main>
      </Container>
    </FooterWrap>
  );
};
const FooterWrap = styled.div`
  height: 250px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: ${(props) => props.theme.footerBg};
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textColor2};

  p {
    font-size: 14px;
  }

  .description {
    margin-bottom: 20px;

    a {
      font-weight: 400;
    }
  }

  .forem-logo {
    margin-top: 20px;
  }
`;

export default Footer;
