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
      <header className="App-header" style={{display:'flex', flexDirection:'column', paddingLeft:'40px'}}>
        <Row style={{alignSelf:'flex-start',display:'flex', width:'100%', justifyContent:'space-between'}}>
        <img src={logo} style={{display:'flex',  width:'300px', height:'200px'}}></img>
        <img style={{display:'flex', justifySelf:'flex-end', height:'200px'}} src={placeholder_image} ></img>
        </Row>
        <NavBar/>
      </header>
      <body>
        <Container>
        <SimpleSide left={img1} right={placeholder_text}/>
        <Row style={{padding: "20px 5px", display:'flex',justifyContent:"flex-start"}}>
            <img src={majorupdate}></img>
        </Row>
          <Row>
          <Grid titles={[...Array(30).keys()].map((_) => "Peaches")}
                rowsAtOnce={3}
          />
          </Row>
        <SimpleSide left={<div>{placeholder_text} <img src={join}></img></div>} right={img1}/>
        </Container>
      </body>
      <footer>
        <div style={{padding:"0px 20px"}} >
          <h4 className='secondary-font'>
            Want Pickles?
          </h4>
        </div>
        <div className='navbar-split' style={{margin: "0% 30%"}}>
        <img src={disc} className="button-pop bordered"></img>
        <img src={twit} className="button-pop bordered"></img>
        <img src={face} className="button-pop bordered"></img>
        <img src={you} className="button-pop bordered"></img>
        <img src={ins} className="button-pop bordered"></img>
        </div>
        <div className='navbar-split' style={{paddingTop: "50px"}}>
        <img src={join} style={{height: '87px'}} className="button-pop"></img>
        <img src={missioncontrol} className="button-pop"></img>
        <img src={dreamscape} className="button-pop"></img>
        <img src={tos} className="button-pop"></img>
        <img src={privacypolicy} className="button-pop"></img>
        <img src={serverstatus} className="button-pop"></img>
        </div>
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
