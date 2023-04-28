import TopDetails from "./TopDetails";
import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
// import photo from "./logo.png";
// import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import photo from "./logo.png";

const NavbarList = () => {
  return (
    <>
      <nav
        class="navbar navbar pb-1 p-2"
        style={{ backgroundColor: "#2f8e94" }}
      >
        <TopDetails />
        <NavLink
          to="/STORE"
          className={classes.font}
          style={{ color: "white" }}
        >
          <img
            style={{
              borderRadius: "0.3rem",
              height: "1rem",
              width: "1rem",
              marginRight: "0.5rem",
            }}
            src="https://png.pngitem.com/pimgs/s/9-96675_phone-icon-white-png-minimal-phone-icon-png.png"
            alt="logo"
          />
          245124586414
        </NavLink>

        <NavLink
          to="/STORE"
          className={classes.font}
          style={{ color: "white", marginRight: "7rem" }}
        >
          My Account
        </NavLink>
      </nav>

      <Navbar
        bg="white"
        expand="sm"
        variant="white"
        sticky="top"
        className="border border-black"
      >
        <Container>
          <Nav>
            <NavLink
              to="/"
              className={classes.font}
              style={{ color: "black", marginRight: "8rem" }}
            >
              <img
                style={{ width: "10rem", height: "2rem", marginLeft: "-2rem" }}
                src={photo}
                alt="logo"
              />
            </NavLink>
            <NavLink
              to="/Home"
              className={classes.font}
              style={{
                color: "black",
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/Product"
              className={classes.font}
              style={{
                color: "black",
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              Products
            </NavLink>
            <NavLink
              to="/category"
              className={classes.font}
              style={{
                color: "black",
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              category
            </NavLink>
            <NavLink
              to="/Cateloges"
              className={classes.font}
              style={{
                color: "black",
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              Cateloges
            </NavLink>
            <NavLink
              to="/About"
              className={classes.font}
              style={{
                color: "black",
                fontWeight: "bold",
                marginRight: "0.7rem",
              }}
            >
              About us
            </NavLink>
            <NavLink
              to="/Contact"
              className={classes.font}
              style={{
                color: "black",
                fontWeight: "bold",
                marginRight: "0.7rem",
                fontSize: "bolder",
              }}
            >
              Contact uS
            </NavLink>

            <NavLink
              to="/Enquiery"
              className={classes.font}
              style={{
                color: "black",
                fontWeight: "bold",
                marginLeft: "11rem",
              }}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/341/166/original/search-icon-sign-symbol-design-free-png.png"
                alt="search bar"
                style={{ height: "1rem", width: "1rem", marginRight: "1rem" }}
              />
              Enquirey
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarList;
