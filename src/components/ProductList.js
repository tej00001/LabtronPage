import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import p5 from "./p5.png";
import p6 from "./p6.png";
import p7 from "./p7.png";
import p8 from "./p8.png";
import p9 from "./p9.png";
import classes from "./ProductList.module.css";

import { Card, CardGroup, Row, Col, Container } from "react-bootstrap";
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
    imageUrl: p5,
  },
  {
    title: "Salty spary Chamber Stand",
    imageUrl: p6,
  },
  {
    title: "Salty spary Chamber Stand",
    imageUrl: p7,
  },
  {
    title: "Salty spary Chamber Stand",
    imageUrl: p8,
  },
  {
    title: "Salty spary Chamber Stand",
    imageUrl: p9,
  },
];

const EquipmentDetails = () => {
  
  return (
    <div >
      <h4 className={classes.h4}>FEATURED CATEGORIES</h4>

      <Row xs={1} md={4} className="g-4" >
        {productsArr.map((item) => {
          return (
            <Col>
            <Container >
              <Card className={classes.logo} style={{height:"16rem",backgroundColor:"rgba(234, 232, 232, 0.881)",border:"white"}}>
                <Card.Img
                  //  variant="bottom"
                  src={item.imageUrl}
                  alt="equipments"
                  className="mx-auto"
                  style={{ height: "8rem", width: "10rem"}}
                />
                <Card.Body className={classes.text}>
                  <Card.Text>{item.title}</Card.Text>
                </Card.Body>
              </Card>
              </Container>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default EquipmentDetails;
