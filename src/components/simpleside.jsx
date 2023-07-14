import { Row, Col } from "react-bootstrap";

export default function SimpleSide(props) {
    return <div >
        <Row className="simple-side-space">
            <Col className="fit-content-double" xs={12} sm={12} md={12} lg={6}>
                {props.left}
            </Col>
            <Col className="fit-content-double" xs={12} sm={12} md={12} lg={6}>
                {props.right}
            </Col>
        </Row>
    </div>
}