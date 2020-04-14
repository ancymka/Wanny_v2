import React from "react";
import { Card, Col, Button, Table, Modal, Form } from "react-bootstrap";
import classes from "./Stand.module.css";
import { useState } from "react";
import axios from "axios";
import { withNamespaces } from "react-i18next";

const Stand = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleSend = () => {
    setShow(false);
    axios.post("https://jsonplaceholder.typicode.com/posts", {
      ...insertion,
    });
  };
  const handleShow = () => setShow(true);

  const [insertion, setInsertion] = useState({
    id: "",
    element: "",
    typeOfChrome: "",
    firstElement: {
      name: "",
      nrOfDrawing: "",
      nrOfOrder: "",
      nrOfOperation: "",
    },
    secondElement: {
      name: "",
      nrOfDrawing: "",
      nrOfOrder: "",
      nrOfOperation: "",
    },
  });

  const { t } = props;

  const handleOccupy = () => {
    const userId = 2137;
    axios
      .post(`https://rectifier-backend.herokuapp.com/bath/${props.id}/occupy`, {
        id: userId,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const ocuppiedClass = props.user ? classes.occupied : classes.vacant;

  const renderOccupationButton = () =>
    props.user ? null : (
      <Button variant="outline-secondary mb-1" size="sm" onClick={handleOccupy}>
        {t("Occupy stand")}
      </Button>
    );

  return (
    <>
      <Col className="mt-2 mb-2" md="3" as={Card} border="light" text="center">
        <Card.Header className={`${ocuppiedClass}`}>
          Wanna {props.index}
        </Card.Header>
        <Card.Body>
          <h6>{t("Process state")}</h6>
          {renderOccupationButton()}
          <div>
            <Button
              onClick={handleShow}
              variant="outline-success mb-1 mr-1 ml-1"
              size="sm"
            >
              {t("Start a process")}
            </Button>
            <Button variant="outline-danger mb-1 ml-1 mr-1" size="sm">
              {t("Finish a process")}
            </Button>
          </div>
          <Table className="w-100">
            <tbody>
            <tr>
              <td className="w-25">{t("Voltage")}</td>
              <td>1234</td>
              <td className="w-10">V</td>
            </tr>
            <tr>
              <td className="w-25">{t("Power")}</td>
              <td>1234</td>
              <td className="w-10">A</td>
            </tr>
            <tr>
              <td className="w-25">{t("Temprature")}</td>
              <td>1234</td>
              <td className="w-10">C</td>
            </tr>
            <tr>
              <td className="w-25">{t("Time")}</td>
              <td>1234</td>
              <td className="w-10">min</td>
            </tr>
            <tr>
              <td className="w-25"> {t("State")}</td>
              <td>1234</td>
              <td className="w-10">OK</td>
            </tr>
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-dark" size="sm">
            {t("Show a chart")}
          </Button>
        </Card.Footer>
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("Creating a new insert")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>{t("id")}:</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setInsertion({
                    ...insertion,
                    id: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>{t("element")}:</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setInsertion({
                    ...insertion,
                    element: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>{t("typeOfChrome")}</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setInsertion({
                    ...insertion,
                    typeOfChrome: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>{t("name")}:</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setInsertion({
                    firstElement: {
                      ...insertion,
                      name: e.target.value,
                    },
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>{t("nrOfDrawing")}:</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setInsertion({
                    firstElement: {
                      ...insertion,
                      nrOfDrawing: e.target.value,
                    },
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>{t("nrOfOrder")}</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setInsertion({
                    firstElement: {
                      ...insertion,
                      nrOfOrder: e.target.value,
                    },
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>{t("nrOfOperation")}</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setInsertion({
                    firstElement: {
                      ...insertion,
                      nrOfOperation: e.target.value,
                    },
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>{t("name")}</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setInsertion({
                    secondElement: {
                      ...insertion,
                      name: e.target.value,
                    },
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>{t("nrOfDrawing")}</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setInsertion({
                    secondElement: {
                      ...insertion,
                      nrOfDrawing: e.target.value,
                    },
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>{t("nrOfOrder")}</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setInsertion({
                    secondElement: {
                      ...insertion,
                      nrOfOrder: e.target.value,
                    },
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>{t("nrOfOperation")}</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setInsertion({
                    secondElement: {
                      ...insertion,
                      nrOfOperation: e.target.value,
                    },
                  })
                }
              ></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            {t("close")}
          </Button>
          <Button variant="success" onClick={handleSend}>
            {t("save changes")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default withNamespaces("Stand")(Stand);
