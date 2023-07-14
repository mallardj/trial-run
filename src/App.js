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
import majorupdate from "./Assets/website-buttons/majorupdates.png"
import join from "./Assets/website-buttons/join.png"
import logo from "./Assets/website-buttons/main_logo.png"
import missioncontrol from "./Assets/website-buttons/HOVER Mission Control.png"
import privacypolicy from "./Assets/website-buttons/HOVER Privacy Policy.png"
import dreamscape from "./Assets/website-buttons/HOVER Dreamscape.png"
import serverstatus from "./Assets/website-buttons/HOVER Server Status.png"
import tos from "./Assets/website-buttons/HOVER Terms of Service.png"


function ExampleTTWebsite() {

  const img1 = <img src={placeholder_image} style={{maxWidth: "30vw"}}></img>

  const placeholder_text = <div>
    <h4 className="secondary-font">Lorem Ipsum</h4>
    <p>
    {constants["placeholder-text"]}
  </p>

    </div>
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <header className="App-header" style={{display:'flex', flexDirection:'column'}}>
        <Container>

        <Row style={{alignSelf:'flex-start',display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Col>
            <img src={logo} style={{display:'flex',  width:'300px', height:'200px'}}></img>
          </Col>
          <Col style={{display:'flex', justifyContent:'flex-end'}}>
        <img style={{ height:'200px'}} src={placeholder_image} ></img>
          </Col>
        </Row>
        </Container>
        <NavBar/>
      </header>
      <div>
        <Container>
        <SimpleSide left={img1} right={placeholder_text}/>
        <Row style={{padding: "20px 5px", display:'flex',justifyContent:"flex-start"}}>
          <Col xs={12} sm={8} md={7} lg={6}>
            <img src={majorupdate} style={{height: "auto", width: "100%"}}></img>
          </Col>
        </Row>
          <Row>
          <Grid titles={[...Array(30).keys()].map((_) => "Peaches")}
                rowsAtOnce={3}
          />
          </Row>
        <SimpleSide left={<div>{placeholder_text} <img src={join}></img></div>} right={img1}/>
        </Container>
      </div>
      <footer>
        <div style={{padding:"0px 20px"}} >
          <h4 className='secondary-font'>
            Want Pickles?
          </h4>
        </div>
        <Row style={{margin: "0% 30%"}}>
          <Col>
        <img src={disc} className="button-pop bordered"></img>
        </Col>
        <Col>
        <img src={twit} className="button-pop bordered"></img>
        </Col>
        <Col>
        <img src={face} className="button-pop bordered"></img>
        </Col>
        <Col>
        <img src={you} className="button-pop bordered"></img>
        </Col>
        <Col>
        <img src={ins} className="button-pop bordered"></img>
        </Col>
        </Row>
        <Container>
          <Row style={{paddingTop: "50px"}}>
            <Col>
            <img src={join} style={{height: '87px'}} className="button-pop"></img>
            </Col>
            <Col>
            <img src={missioncontrol} className="button-pop"></img>
            </Col>
            <Col>
            <img src={dreamscape} className="button-pop"></img>
            </Col>
            <Col>
            <img src={tos} className="button-pop"></img>
            </Col>
            <Col>
            <img src={privacypolicy} className="button-pop"></img>
            </Col>
            <Col>
            <img src={serverstatus} className="button-pop"></img>
            </Col>
          </Row>
        </Container>
        <div style={{margin: "0% 15%"}}>
          <p>
            {[...Array(30)].map(_ => 'Pickles').join(', ')}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ExampleTTWebsite;
