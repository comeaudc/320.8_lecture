import { useParams } from 'react-router-dom';

function About() {
  
  const { name } = useParams();

  return (
    <div>
      <h1>About Page</h1>
      <h2>Hello, {name}</h2>
    </div>
  );
}

export default About;
