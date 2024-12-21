import { Typography, Box } from "@mui/material";
import "./footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import gogleScholar from "../../image/go.jpeg";
import orcid from "../../image/orcid_new.jpeg";
// import Logo from "../../image/bitPilani_logo.jpeg";
import Logo from "../../image/bits_rm_bg.png";
import labLogo from "../../image/bits_lab_logo.jpeg";
import linkedin_round from "../../image/linkedin_round.jpeg";
import footerBackground from "../../image/Background_Final_without_circle.jpeg";
import Scanner from "../../image/scanner.jpeg";
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
          style={{ width: "100%", height: "-webkit-fill-available" }}
        />

        <img src={Logo} alt="bits" className="logo positioning" />

        <img
          src={Scanner}
          alt="scanner"
          style={{
            width: "4%",
            marginTop: "3%",
            position: "absolute",
            right: "5%",
            bottom: "35%",
          }}
        />

        <Typography className="positioning" sx={{ bottom: 0, left: "50%" }}>
          @2024 by Atun Roy Choudhury
        </Typography>
        <div className="link positioning">
          <Link
            to="https://www.linkedin.com/in/dr-atun-roy-choudhury/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <LinkedInIcon fontSize="large" color="#399cff" /> */}

            <img
              src={linkedin_round}
              className="footer-link"
              alt="linkedinImage"
            />
          </Link>
          <Link
            to="https://scholar.google.co.in/citations?user=rC03XGAAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gogleScholar} className="footer-link" />
          </Link>
          <Link
            to="https://orcid.org/0000-0002-7503-5457"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={orcid} className="footer-link" />
          </Link>
          <Link
            to="https://www.bits-pilani.ac.in/hyderabad/bestlab/people/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={labLogo} className="footer-link" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
