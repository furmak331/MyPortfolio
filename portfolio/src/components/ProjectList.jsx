import styled from 'styled-components';

const ProjectContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
`;

const projects = [
  { name: 'EZ Reserve', description: 'Centralized reservation app with React and 3js.' },
  { name: 'Car Rental Website', description: 'Full-stack application with Node.js, Express.js, and MySQL.' },
  { name: 'Food Delivery App', description: 'Frontend developed with React, optimized for performance.' },
];

function ProjectList() {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectContainer key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </ProjectContainer>
      ))}
    </div>
  );
}

export default ProjectList;
