import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import p5 from "./p5.png";
import p6 from "./p6.png";
import p7 from "./p7.png";
import p8 from "./p8.png";
import p9 from "./p9.png";

import classes from "./trending.module.css";

import { Card, CardGroup, Row, Col, Container,Button } from "react-bootstrap";
const productsArr = [
  {
    title: "Salty spary Chamber Stand",
    imageUrl: p1,
  },
  {
    title: "Salty spary Chamber Stand",
    imageUrl: p2,
  },
  {
    title: "Salty spary Chamber Stand",
    imageUrl: p3,
  },
  {
    title: "Salty spary Chamber Stand",
    imageUrl: p7,
  },
  {
    title: "Salty spary Chamber Stand",
    imageUrl: p5,
  },
  {
    title: "Salty spary Chamber Stand",
    imageUrl: p6,
  },
];

const TrendingDetails = () => {

  return (
    <div>
      <h4 className={classes.hello}>Treading at Labnix</h4>

      <Row xs={1} md={3} className="gr-4 g-4" variant="middle">
        {productsArr.map((item) => {
          return (
            <Col>
              <Card
                className={classes.logo}
                style={{ height: "12rem", borderColor: "#2f8e94" }}
              >
                <Row>
                  <Col xs={4}>
                    <Card.Img
                      variant="top"
                      src={item.imageUrl}
                      alt="equipments"
                      style={{
                        height: "7rem",
                        width: "7rem",
                        marginTop: "2rem",
                        padding: "0.5rem",
                      }}
                    />
                  </Col>
                  <Col xs={8}>
                    <Card.Body className="mt-3">
                      {" "}
                      <Card.Title>Melt Flow Indexer</Card.Title>
                      <Card.Text>Melt Flow Indexer NMFI-101</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
                <Card.Footer
                  style={{
                    backgroundColor: "#2f8e94",
                    color: "white",
                    marginTop: "0.3rem",
                  }}
                >
                  <Container >
                    <Row className="xs ">
                      <Col>View</Col>
                      <Col>Quote</Col>
                      <Col>Cateloge</Col>
                    </Row>
                  </Container>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default TrendingDetails;
