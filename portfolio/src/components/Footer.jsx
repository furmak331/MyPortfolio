import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  background-color: #111;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

function Footer() {
  return (
    <FooterContainer>
      <div>
        <FontAwesomeIcon icon={faPhone} /> +91 9622 691113
      </div>
      <div>
        <FontAwesomeIcon icon={faEnvelope} /> furmak331@gmail.com
      </div>
    </FooterContainer>
  );
}

export default Footer;
