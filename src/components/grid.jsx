import { useEffect, useState } from "react"
import { Card, Container, Row, Col } from "react-bootstrap"
import readMoreIcon from "../Assets/website-buttons/HOVER Read More.png" 
import readLessicon from "../Assets/website-buttons/HOVER Read Less.png" 
import comingSoon from "../Assets/Toontown__Event_Horizon_Website_Prorotype/coming_soon.png";


export default function Grid(props) {
    const [index, setIndex] = useState(0)
    const titles = props.titles;
    const partitions = Math.ceil(props.titles.length / (props.rowsAtOnce * 3)) // how many pages?

    useEffect(function () {    
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    sleep(500).then(() => {
        const cardEl = document.getElementById("row-0");
        const factor = getComputedStyle(cardEl).height;
        console.log(factor, props.rowsAtOnce);
        document.getElementById("section-container").style.setProperty('height',  `calc(${factor} * ${props.rowsAtOnce})`)
    }
    );
    }, []);


    const sections = [...Array(partitions).keys()].map((i) => {
        const row_indices = [...Array(props.rowsAtOnce).keys()];
        const col_indices = [...Array(3).keys()];
        return <div className={"expandable " + (i === 0 ? "expanded" : "collapsed")} 
                    id={"expand-contract-" + String(i)}>
            {row_indices.map((j) => 
                <Row id={"row-" + String((props.rowsAtOnce * i + j))} className="row-split">
{
    col_indices.map(function (k) {
        if ((props.rowsAtOnce * i + j) * 3 + k > titles.length) {
            return <Col xs={4}></Col>;
        } else {

            return <Col xs={4}>
             <Card id={"card-" + String((props.rowsAtOnce * i + j) * 3 + k)}>
                <Card.Img variant="top" src={comingSoon} className="fit-content"></Card.Img>
                <Card.Body>
                    <Card.Title>{titles[(props.rowsAtOnce * i + j) * 3 + k]}</Card.Title>
                    <Card.Text>
                    XX/XX/XXXX
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>;
        }
    })
}
    </Row>

             )}

        </div>
    })

    const readMore = function () {
        const el = document.getElementById("expand-contract-" + String(index + 1))
        el.classList.toggle('expanded')
        el.classList.toggle('collapsed')
        setIndex(index + 1);
    }

    const readLess = function () {
        const el = document.getElementById("expand-contract-" + String(index))
        el.classList.toggle('expanded')
        el.classList.toggle('collapsed')        
        setIndex(index - 1);
    }

    return <Container style={{display: "flex", flexDirection: "column"}}>
        <div id="section-container">

            {sections}
        </div>
        <div style={{marginTop: "auto"}}>

            <div style={{display: "flex", justifyContent:"space-around"}}>
                {index < partitions - 1 ? <div onClick={readMore}><img src={readMoreIcon}></img></div> : <div></div>}
                {index > 0 ? <div onClick={readLess}><img src={readLessicon} ></img></div> : <div></div>}
            </div>
        </div>
    </Container>
}