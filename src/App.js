import './App.css';
import NavBar from './components/navbar';
import { Col, Container, Row } from 'react-bootstrap';
import Grid from './components/grid';
import SimpleSide from './components/simpleside';
import placeholder_image from "./Assets/largeImages/14-2-17_pieinthemorning.png"
import constants from "./constants.json"
import ins from "./Assets/website-buttons/ins.png"
import twit from "./Assets/website-buttons/twit.png"
import you from "./Assets/website-buttons/you.png"
import face from "./Assets/website-buttons/face.png"
import disc from "./Assets/website-buttons/disc.png"


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
      <footer>
        <div className='navbar-split' style={{margin: "0% 30%"}}>
        <img src={disc} className="button-pop bordered"></img>
        <img src={twit} className="button-pop bordered"></img>
        <img src={face} className="button-pop bordered"></img>
        <img src={you} className="button-pop bordered"></img>
        <img src={ins} className="button-pop bordered"></img>
        </div>
      </footer>
    </div>
  );
}

export default ExampleTTWebsite;
