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
import useFetchData from '../hooks/useFetchData';
import '../styles/components/App.css';

const App = () => {
  const API = 'http://localhost:3000/data';
  const {
    avatar,
    name,
    profession,
    phone,
    email,
    website,
    address,
    profile,
    about,
    experience,
    academic,
    skills,
    interest,
    languages,
  } = useFetchData(API);
  console.log({ interest });
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Header
              className="App"
              avatar={avatar}
              name={name}
              profession={profession}
              phone={phone}
              email={email}
              website={website}
              address={address}
            >
              <About about={about} />
            </Header>
          </Col>
        </Row>

        <Row className="App">
          <Col>
            <Profile profile={profile} />
          </Col>
        </Row>

        <Row className="App">
          <Col>
            <Experience experience={experience} />
          </Col>
        </Row>

        <Row className="App">
          <Col>
            <Academic academic={academic} />
          </Col>
          <Col>
            <Skills skills={skills} />
          </Col>
        </Row>
        <Row className="App">
          <Col>
            <Interest interest={interest} />
          </Col>
          <Col>
            <Languages languages={languages} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
