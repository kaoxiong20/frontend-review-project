import ProjectListing from './ProjectListing';
import ProjectMessage from './ProjectMessage';
import Header from './Header';

function Projects() {
  return (
    <>
    <Header HeaderContent="My Projects"/>
    <ProjectMessage MessageContent="Do you have any advice?"/>
    <ProjectListing
        ProjectName="DJ Days Project"
        ProjectType="Mapping"
      />

    <ProjectListing
      ProjectName="Restaurant Project"
      ProjectType="Mapping"
    />

    <ProjectListing
      ProjectName="API Project"
      ProjectType="Mapping"
    />

    <ProjectListing
      ProjectName="Mood Tracker Project"
      ProjectType="Mapping"
    />
    </>
  );
}

export default Projects;