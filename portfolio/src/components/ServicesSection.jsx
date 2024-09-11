import styled from 'styled-components';

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 50px;
  background-color: #0d0d0d;
  color: #ffffff;
`;

const Service = styled.div`
  padding: 20px;
  border-left: 1px solid #1a1a1a;
  &:first-child {
    border-left: none;
  }
`;

const ServiceTitle = styled.h3`
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  color: #e5e5e5;
`;

function ServicesSection() {
  return (
    <ServicesContainer>
      <Service>
        <ServiceTitle>UX & UI</ServiceTitle>
        <ServiceDescription>Designing interfaces.</ServiceDescription>
      </Service>
      <Service>
        <ServiceTitle>Web & Mobile App</ServiceTitle>
        <ServiceDescription>Transforming ideas into exceptional experiences.</ServiceDescription>
      </Service>
      <Service>
        <ServiceTitle>Design & Creative</ServiceTitle>
        <ServiceDescription>Crafting visually stunning designs.</ServiceDescription>
      </Service>
      <Service>
        <ServiceTitle>Development</ServiceTitle>
        <ServiceDescription>Bringing visions to life with the latest technology.</ServiceDescription>
      </Service>
    </ServicesContainer>
  );
}

export default ServicesSection;
