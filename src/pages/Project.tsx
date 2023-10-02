import { useParams } from 'react-router-dom';

function Project() {
  const { projectID } = useParams();

  return <div>{projectID}</div>;
}

export default Project;
