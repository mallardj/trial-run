import { Row, Col } from "react-bootstrap";

export default function SimpleSide(props) {
    return <div >
        <Row className="simple-side-space">
            <Col className="fit-content-double" xs={5}>
                {props.left}
            </Col>
            <Col className="fit-content-double" xs={5}>
                {props.right}
            </Col>
        </Row>
    </div>
}