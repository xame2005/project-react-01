import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Header>
              <About />
            </Header>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Profile />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Experience />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Academic />
          </Col>
          <Col>
            <Skills />
          </Col>
        </Row>
        <Row>
          <Col>
            <Interest />
          </Col>
          <Col>
            <Languages />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
