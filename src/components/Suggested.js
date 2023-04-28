import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import p5 from "./p5.png";
import p6 from "./p6.png";
import p7 from "./p7.png";
import p8 from "./p8.png";
import p9 from "./p9.png";

import classes from "./Suggested.module.css";

import { Card, Button, Row, Col, CardGroup,Container } from "react-bootstrap";
const productsArr = [
  {
    title: "Melt Flow Indexer NMFI-101 ",
    imageUrl: p2,
  },
  {
    title: "Melt Flow Indexer NMFI-101 ",
    imageUrl: p3,
  },
  {
    title: "Melt Flow Indexer NMFI-101 ",
    imageUrl: p5,
  },
];

const SuggestedPage = () => {
  // const ProductsDetails = productsArr.map((item) => (
  //     <ProductList

  //       imageUrl={item.imageUrl}
  //       title={item.title}
  //     />
  //   ));
  return (
    <div>
      <h4 className={classes.hello}>Suggested Products</h4>
      <Container>
      <Row xs={1} md={4} className="g-5" variant="middle">
        <Col xs={8}>
          <Card style={{width:"27rem",height:"15rem",marginLeft:"-4rem",borderColor:"#2f8e94"}}>
            <Row>
              <Col xs={4}>
                <Card.Img src={p1} alt="equipment"
                 style={{
                  height: "10rem",
                  width: "8rem",
                  marginTop: "2rem",
                  padding: "0.5rem",
                }} />
              </Col>
              <Col>
     
                <Card.Body > 
                  <Card.Title  style={{
                  color:"#2f8e94"}}>Haze Measurement </Card.Title>
                  <Card.Text> <p style={{fontWeight:"bold"}}>
                  Haze meter NHM-101</p>Color and Haze meter NHM-101 Color and Haze meter NHM-101Color and 
                    Haze meter NHM-101Color </Card.Text>
                  <button className={classes.button} >View</button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        
    {productsArr.map((item)=>{
      return(
        <Col xs={2}>
      <Card style={{width:"13rem",marginLeft:"7rem"}}>
        <Card.Img   
        src={item.imageUrl}
        alt="equipment"
        className="mx-auto"
       style= {{
          height: "10rem",
          width: "10rem",
          marginTop: "1rem",
          padding: "0.5rem",
        }}/>
        <Card.Body>
          <Card.Text>
        {item.title}
          </Card.Text>
        </Card.Body>
        <Card.Footer
         style={{
          backgroundColor: "#2f8e94",
          color: "white",
          marginTop: "0.3rem",
        }}>
          <Row>
            <Col>View</Col>
            <Col>Cataloge</Col>

          </Row>
        </Card.Footer>
      </Card></Col>
    )
    })}
  
</Row>
</Container>
    </div>
  );
};
        
       
export default SuggestedPage;
