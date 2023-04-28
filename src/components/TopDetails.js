import { Navbar } from "react-bootstrap";
import classes from "./TopDetails.module.css";
import fb from "./fb.jpg"
const TopDetails = () => {
    return (
        <div className={classes.items}>
            <Navbar.Brand href="https://www.facebook.com">
                <img
                    src={fb}
                    alt="fb"
                    style={{marginLeft:"6rem",marginRight:"-0.3rem"}}
                />
            </Navbar.Brand>


            <Navbar.Brand href="https://www.twitter.com">
                <img
                    src="https://img.freepik.com/premium-vector/twitter-logo-square-icon_444390-7003.jpg"
                    alt="twitter"
                    style={{marginRight:"-0.3rem"}}
                />
            </Navbar.Brand>
            {/* <a rel='noreferrer' href='' target='_blank'> we can use like this also*/}
            <Navbar.Brand href="https://www.instagram.com">
                <img
                 src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg"
                    alt="youtube"
                    style={{marginRight:"-0.5rem"}}
                />{" "}
            </Navbar.Brand>
            <Navbar.Brand href="https://www.linkedin.com">
            <img
                src="https://www.vhv.rs/dpng/d/5-53359_linkedin-logo-png-transparent-png.png"
                    alt="dial symbol" 
                    style={{marginLeft:"0rem"}}/>
                     
            </Navbar.Brand>

        </div>
    );
};
export default TopDetails;