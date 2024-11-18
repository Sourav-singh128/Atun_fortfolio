import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import profileImg from "../../image/profile_image.jpeg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Research from "../../components/research";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Cards from "../../components/card";

import "./home.css";
import "../../global.css";
import SwiperComp from "../../components/swiper/swiper";
import achivements from "./achivements";
import Metric from "../../components/metrics/metric";
import { certificates } from "./achivements";
function Home() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const buttonHandle = () => {
    setVisible(!visible);
    // window.location = "/about";
  };
  console.log(" cert", certificates[0]);
  return (
    <>
      <div className="page-container">
        {/* <p>This is home page</p> */}
        <Box
          display="flex"
          flexDirection={"row"}
          gap={10}
          sx={{ paddingTop: "1%" }}
        >
          <Avatar
            alt="profile"
            src={profileImg}
            sx={{ width: 300, height: 300 }}
          />
          <Box display="flex" flexDirection={"column"}>
            <Typography variant="h3" textAlign={"left"}>
              Dr. Atun Roy Choudhury
            </Typography>
            <Box sx={{ border: "1px solid black", width: "120px" }} />
            <Typography
              variant="h6"
              textAlign={"justify"}
              paddingTop={1}
              paddingBottom={1}
              fontWeight={300}
            >
              A highly motivated, analytical, and investigative Chemical
              Engineer with hands-on experience from lab scale to pilot-scale
              fermentation; completed a master’s degree in Biochemical
              Engineering (interdisciplinary) to develop and refine
              multitudinous skill sets in bioprocessing for waste valorization
              and bioenergy generation; currently, pursuing my doctoral degree
              in Biological Engineering at the University of Illinois
              Urbana-Champaign, USA.
              {visible && (
                <span>
                  A highly motivated, analytical, and investigative Chemical
                  Engineer with hands-on experience from lab scale to
                  pilot-scale fermentation; completed a master’s degree in
                  Biochemical Engineering (interdisciplinary) to develop and
                  refine multitudinous skill sets in bioprocessing for waste
                  valorization and bioenergy generation; currently, pursuing my
                  doctoral degree in Biological Engineering at the University of
                  Illinois Urbana-Champaign, USA.{" "}
                </span>
              )}
            </Typography>
            <Button
              variant="contained"
              sx={{ maxWidth: "25%" }}
              marginTop={1}
              onClick={buttonHandle}
            >
              {visible ? "READ LESS" : "READ MORE"}
            </Button>
          </Box>
        </Box>
        {/* <Research /> */}
        <SwiperComp achivements={achivements} />
        <Marquee></Marquee>
        <Link to="https://drive.google.com/file/d/127RJ7IvZbS3-ZY2emyiGhBgCfEgg6-5c/view?usp=sharing">
          <Button variant="outlined">Download Full CV</Button>
        </Link>
        {/* <Metric /> */}
      </div>
      <div className="metric">
        <Metric />
      </div>
      <div style={{ marginTop: "40px" }}>
        <Marquee>
          {certificates.map((images) => (
            <Cards
              url={images.url}
              width="95%"
              height="350"
              sx={{ padding: "0 5px" }}
            />
          ))}
        </Marquee>
      </div>
    </>
  );
}

export default Home;
