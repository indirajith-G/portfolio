import React from 'react';
import './Project.css';
import age from './images/age.jpg';
import SmartEx from './images/smartEx.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProjectContent() {
  const openProjectLink = () => {
    const url = "https://age-quest.netlify.app/";
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
  <Container>
		<div id="projects">
			<div className='projects-heading'>
			<h3>latest projects</h3>
			</div>
		</div>
      <Row className='d-none d-md-flex d-lg-flex'> 
        <Col    lg={{ order: 'last' }}>
          <Card.Img className='project-image'src={SmartEx} />
		    </Col>
        <Col className= "project-detail-text" lg={{ order: 'first' }}>
          <Card.Title>SmartEx</Card.Title>
          <Card.Text>
            SmartEx is a gate pass system designed to maintain a healthy relationship within the visitors and as well as the students inside an organization. The system is designed by using various combinations of the tools and technologies which have the growth in the modern technological field.
          </Card.Text>
          <a href="https://indirajith-g-portfolio.netlify.app/"rel="noopener noreferrer"><Button variant="primary">View Project</Button></a>
		    </Col>
      </Row>
      
      <Row className='d-none d-md-flex d-lg-flex'>
        <Col   xs={{ order: 'last' }} lg={{ order: 'first' }}>
          <Card.Img className='project-image'src={age} />
		    </Col>  
        <Col className= "project-detail-text"  xs={{ order: 'first' }} lg={{ order: 'last' }}>
          <Card.Title>Age-Quest</Card.Title>
          <Card.Text>
          Age-Quest allows you to effortlessly calculate your age or the age of anyone by simply entering the birthdate.
          </Card.Text>
          <Button variant="primary" onClick={openProjectLink}>
            View Project
          </Button>
		    </Col>
      </Row>

      <Card className= 'd-md-none small-screen' >
      <Card.Img className='project-image'src={SmartEx} />
      <Card.Body>
      <Card.Title>SmartEx</Card.Title>
          <Card.Text>
            SmartEx is a gate pass system designed to maintain a healthy relationship within the visitors and as well as the students inside an organization. The system is designed by using various combinations of the tools and technologies which have the growth in the modern technological field.
          </Card.Text>
          <a href="https://indirajith-g-portfolio.netlify.app/"><Button variant="primary">View Project</Button></a>
      </Card.Body>
    </Card>
    <Card className= 'd-md-none small-screen' >
    <Card.Img className='project-image'src={age} />
      <Card.Body>
      <Card.Title>Age-Quest</Card.Title>
          <Card.Text>
          Age-Quest allows you to effortlessly calculate your age or the age of anyone by simply entering the birthdate.
          </Card.Text>
          <Button variant="primary" onClick={openProjectLink}>
            View Project
          </Button>
      </Card.Body>
    </Card>
  </Container>
  );
}
