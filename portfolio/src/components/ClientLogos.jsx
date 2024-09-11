import styled from 'styled-components';

const LogosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: #111111;
`;

const Logo = styled.img`
  margin: 0 20px;
  filter: grayscale(100%);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

function ClientLogos() {
  return (
    <LogosContainer>
      <Logo src="/logo-nb.png" alt="National Bank" />
      <Logo src="/logo-mattered.png" alt="Mattered" />
      <Logo src="/logo-cocacola.png" alt="Coca-Cola" />
      <Logo src="/logo-lightbox.png" alt="Lightbox" />
      <Logo src="/logo-subway.png" alt="Subway" />
      <Logo src="/logo-boltshift.png" alt="Boltshift" />
    </LogosContainer>
  );
}

export default ClientLogos;
