import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import profileImg from "../../image/profile_image.jpeg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
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
      <Box
        display="flex"
        flexDirection={"row"}
        gap={9}
        sx={{ paddingTop: "1%" }}
      >
        <Avatar
          alt="profile"
          src={profileImg}
          sx={{ width: 300, height: 300 }}
        />
        <Box display="flex" flexDirection={"column"} sx={{ maxWidth: "45%" }}>
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
            // sx={{ maxWidth: "60%" }}
          >
            Dr. Atun Roy Choudhury, an accomplished Environmental Engineer with
            a PhD from BITS Pilani, is currently the Assistant General Manager
            for Technical Strategy and Planning at Cube Bio-Energy Private
            Limited. His extensive career spans prominent roles in organizations
            such as NARL-ISRO, IL&FS Environment, Ramky Enviro Engineers Ltd.,
            Bank Bio Limited, Shrushti group, etc. and he is widely recognized
            as a leading expert in waste management, water, and sanitation.
            {visible && (
              <span>
                With over 50 publications in prestigious international journals,
                books, and scientific magazines, Dr. Roy Choudhury also serves
                as an Editor and Reviewer with leading publication houses
                globally. He is a sought-after speaker at international forums,
                including TEDx, and has mentored numerous master’s and
                undergraduate students in their research. His academic and
                professional achievements have been recognized with several
                awards, including the University Grant Commission’s gold medal.
                Dr. Roy Choudhury is also a certified Environmental Lead Auditor
                and Six Sigma Green Belt Quality Expert. His groundbreaking work
                on macrobial digestion of solid waste, recognized by the UN and
                featured in the Asia Book of Records, has earned him global
                recognition. Additionally, he was honored in the Oxford World
                Book of Researchers, further establishing his influence in the
                field.
              </span>
            )}
          </Typography>
          <Button
            variant="contained"
            sx={{ maxWidth: "18%" }}
            marginTop={1}
            onClick={buttonHandle}
          >
            {visible ? "READ LESS" : "READ MORE"}
          </Button>
        </Box>
        <Box display="flex" flexDirection="column" gap={"20px"}>
          <Box display="flex" gap={"9px"} padding={"10px 0"}>
            <Typography variant="h5">UPCOMING </Typography>
            <Typography variant="h5" sx={{ color: "#d32f2f" }}>
              EVENTS
            </Typography>
            <CalendarMonthIcon />
            <Link to={"/about/upcoming_events"}>
              <Button variant="contained" color="error">
                VIEW ALL
              </Button>
            </Link>
          </Box>
          <Typography>PROGRAMS ON PLATTER</Typography>
          <div className="divider" style={{ width: "98%" }} />
          <Typography>
            Sharing innovative ideas and driving impactful conversations at
            events that shape the future of sustainability
          </Typography>
        </Box>
      </Box>
      <div className="page-container">
        {/* <p>This is home page</p> */}

        {/* <Research /> */}
        <SwiperComp achivements={achivements} />
        <Marquee></Marquee>
        <Link to="https://drive.google.com/file/d/127RJ7IvZbS3-ZY2emyiGhBgCfEgg6-5c/view?usp=sharing">
          <Button
            variant="contained"
            sx={{ width: "470px", height: "45px", fontSize: "large" }}
          >
            Download Full CV
          </Button>
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
