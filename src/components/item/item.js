import { Card, Row, Col, Button, Form } from "react-bootstrap";
import { Trash, PencilSquare } from "react-bootstrap-icons";

const Item = (props) => {
    return (
        <>
            <Card key={props.index + 100} className={`${props.item.mark ? 'text-decoration-line-through bg-danger text-white' : ''}  mb-5`}>
                <Card.Body>
                    <Row>
                        <Col md="2">
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                checked={props.item.mark}
                                onChange={() => props.MarkCompleteTask(props.index)}
                            />
                        </Col>
                        <Col md="7">
                            <p className={!(props.identificador === props.item.identificador) ? 'd-blok' : 'd-none'}>
                                {(props.item.text)}
                            </p>

                            <Form.Control
                                className={(props.identificador === props.item.identificador) & props.isEdit ? '' : 'd-none'}
                                value={props.item.text}
                                as="textarea"
                                rows="3"
                                name="description"
                                onChange={(event) => props.ActualizarTarea(event, props.index)}
                            />

                        </Col>
                        <Col md="3">
                            <Button variant="success" onClick={() => props.EnabledIsEdit(props.item.identificador, props.isEdit)} className="me-2">
                                <PencilSquare />
                            </Button>
                            <Button variant="warning" onClick={() => props.DeleteTask(props.index)}>
                                <Trash />
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default Item;