import React from "react";
import "./Bath.module.css";
import { withNamespaces } from 'react-i18next';


import { Card, Col, Table } from "react-bootstrap";

const Bath = ({t, index, id}) => {
  return (
    <>
      <Col className="mt-2 mb-2" md="3" as={Card} border="light" text="center">
        <Card.Header>
         {t('Bath')}: {index}
        </Card.Header>
        <Card.Body>
          <Table className="w-100">
            <tr>
              <td className="w-25"> {t('Voltage')}</td>
              <td className="w-10"> min: </td>
              <td className="w-10">1234</td>
              <td className="w-10"> max: </td>
              <td className="w-10">1234</td>
              <td className="w-10">V</td>
            </tr>
            <tr>
              <td className="w-25"> {t('Power')}</td>
              <td className="w-10"> min: </td>
              <td className="w-10">1234</td>
              <td className="w-10"> max: </td>
              <td className="w-10">1234</td>
              <td className="w-10">A</td>
            </tr>
            <tr>
              <td className="w-25"> {t('Temprature')}</td>
              <td className="w-10"> min: </td>
              <td className="w-10">1234</td>
              <td className="w-10"> max: </td>
              <td className="w-10">1234</td>
              <td className="w-10">C</td>
            </tr>
            <tr>
              <td className="w-25"> {t('Time')}</td>
              <td className="w-10"> min: </td>
              <td className="w-10">1234</td>
              <td className="w-10"> max: </td>
              <td className="w-10">1234</td>
              <td className="w-10">min</td>
            </tr>
            <tr>
              <td className="w-25"> {t('State')}</td>
              <td className="w-10"> min: </td>
              <td className="w-10">1234</td>
              <td className="w-10"> max: </td>
              <td className="w-10">1234</td>
              <td className="w-10">OK</td>
            </tr>
          </Table>
        </Card.Body>
      </Col>
    </>
  );
};

export default withNamespaces('Bath')(Bath);
