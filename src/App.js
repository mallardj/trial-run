import './App.css';
import NavBar from './components/navbar';
import { Col, Container, Row } from 'react-bootstrap';
import Grid from './components/grid';
import SimpleSide from './components/simpleside';
import placeholder_image from "./Assets/largeImages/14-2-17_pieinthemorning.png"
import constants from "./constants.json"


function ExampleTTWebsite() {

  const img1 = <img src={placeholder_image} style={{maxWidth: "30vw"}}></img>

  const placeholder_text = <p>
    {constants["placeholder-text"]}
  </p>

  return (
    <div className="App">
      <header className="App-header">
        <div>

        </div>
        <NavBar/>
      </header>
      <body>
        <Container>
        <SimpleSide left={img1} right={placeholder_text}/>
        <SimpleSide left={placeholder_text} right={img1}/>
          <Row>
          <Grid titles={[...Array(30).keys()].map((_) => "Peaches")}
                rowsAtOnce={3}
          />
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default ExampleTTWebsite;
