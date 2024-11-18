import { Typography, Box } from "@mui/material";
import "./footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import gogleScholar from "../../image/go.jpeg";
import orcid from "../../image/orcid_new.jpeg";
import Logo from "../../image/bitPilani_logo.jpeg";
import labLogo from "../../image/bits_lab_logo.jpeg";
import footerBackground from "../../image/Background_Final.jpeg";
function Footer() {
  return (
    <>
      <div className="divider" />
      <div className="footer-sec">
        {/* <div style={{ backgroundImage: `url(${footerBackground})` }} /> */}
        <img
          src={footerBackground}
          className="bgImg"
          alt="background-image"
          style={{ width: "-webkit-fill-available", height: "30vh" }}
        />

        {/* <img src={Logo} alt="bits" className="logo" />
        <Typography>@2024 by Atun Roy Choudhury</Typography>
        <div className="link">
          <Link to=" https://www.linkedin.com/in/dr-atun-roy-choudhury-a64a3b116/">
            <LinkedInIcon fontSize="large" color="#399cff" />
          </Link>
          <Link to="https://scholar.google.co.in/citations?user=rC03XGAAAAAJ&hl=en">
            <img src={gogleScholar} className="footer-link" />
          </Link>
          <Link to="https://orcid.org/0000-0002-7503-5457">
            <img src={orcid} className="footer-link" />
          </Link>
          <Link to="https://www.bits-pilani.ac.in/hyderabad/bestlab/people/">
            <img src={labLogo} className="footer-link" />
          </Link>
        </div> */}
      </div>
    </>
  );
}

export default Footer;
