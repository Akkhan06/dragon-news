import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import first from '../../../../assets/1.png'
import second from '../../../../assets/2.png'
import third from '../../../../assets/3.png'
import { FaRegCalendarAlt } from "react-icons/fa";
import ReactDatePicker from "react-datepicker";

const CardGGG = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={first} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex align-items-center gap-3">
                <FaRegCalendarAlt></FaRegCalendarAlt> <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={second} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex align-items-center gap-3">
                <FaRegCalendarAlt></FaRegCalendarAlt> <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={third} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex align-items-center gap-3">
                <FaRegCalendarAlt></FaRegCalendarAlt> <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              </Card.Footer>
            </Card>
          </Col>
          
      </Row>
    </div>
  );
};

export default CardGGG;
