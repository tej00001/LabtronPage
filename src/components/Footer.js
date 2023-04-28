import { Navbar, Nav, NavLink, Container,Row,Col } from "react-bootstrap";
import Labonix from "./labonix";
const FooterDetails = () => {
  return (
    <>
      <nav
        class="navbar navbar  pb-2 p-5" style={{backgroundColor: " #343e40"}}
      >
        <Container style={{color:"lightgrey"}}>
          <Row>
            <Col xs={3}>
            <h1 style={{color:"white"}}>Labonixx</h1>
            <p>dwqedbafrh bafkjbkjsfb bakjefrwje 
              bnakld bkjabcfjk nelrflfl nakld bkjabcfjk nelrf</p>
            </Col>
            <Col>
            <h5  style={{color:"white"}}>Latest News</h5>
            <p >dwqedbafrh bafkjbkjsfb bakjefrwje </p>
            </Col>
            <Col>
            <h5  style={{color:"white"}}>Quik</h5>
            <p>dwqedbafrh bafkjbkjsfb bakjefrwje  </p>
            </Col>
            <Col>
            <h5 style={{color:"white"}}>Best Seller</h5>
            <p>dwqedbafrh bafkjbkjsfb bakjefrwje bnakld bkjabcfjk nelrflfl </p>
            </Col>
          </Row>
          {/* <Nav>
            <NavLink
              to="/STORE"
              // className={classes.font}
              style={{ color: "white" ,marginLeft:"3rem",fontSize:"3rem" }}
            >
              Labonix <br />
            <Labonix />
            </NavLink>
            <NavLink
              to="/STORE"
              // className={classes.font}
              style={{ color: "white",marginLeft:"3rem" }}
            >
              Labonix <br />
            <Labonix />
            </NavLink>
            <NavLink
              to="/STORE"
              // className={classes.font}
              style={{ color: "white",marginLeft:"3rem" }}
            >
              Labonix <br />
            <Labonix />
            </NavLink>
          </Nav> */}
        </Container>
      </nav>
    </>
  );
};
export default FooterDetails;
