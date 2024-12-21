import { useEffect, useRef, useState } from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import emailjs from "@emailjs/browser";
import "./contactMe.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const input = {
  border: "none",
  width: "90%",
  background: "lightgray",
  height: "28px",
  marginTop: "10px",
  padding: "0 0 0 10px",
  borderRadius: "5px",
};

function ContactMe() {
  const [email, setEmail] = useState();
  const [name, setName] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [enable, setEnable] = useState(true);
  useEffect(() => {
    const textArea = document.querySelector("#textArea");
    if (textArea) {
      textArea.style.height = "60px";
    }
  });
  useEffect(() => {
    console.log("use-effect ");
    console.log("is-enab ", enable);
    if (email && name && subject && message) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  }, [email, name, subject, message]);
  useEffect(() => {
    emailjs.init("xvIaiOBkVq3wsvLXu");
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const serviceId = "service_ppco3fp";
    const templateId = "template_dl8v0so";
    console.log(
      "name ",
      name,
      " email ",
      email,
      " sub ",
      subject,
      " mes ",
      message
    );
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: name,
        recipient: email,
        subject: subject,
        message: message,
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  // const isEnable = () => {
  //   return (
  //     nameRef.current.value &&
  //     emailRef.current.value &&
  //     subjectRef.current.value &&
  //     messageRef.current.value
  //   );
  // };
  return (
    <>
      <div className="page-container">
        <Box>
          <Typography variant="h4">CONTACT INFORMATION</Typography>
          <Box
            sx={{ border: "1px solid black" }}
            width={120}
            margin={"auto"}
            marginTop={1}
          ></Box>
          <Typography
            marginTop={2}
            fontFamily={"Tangerine"}
            fontSize={"2rem"}
            sx={{ fontWeight: 600 }}
          >
            Head- Technical and Safety Department, Cube Bio Energy Pvt. Ltd.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item style={{ textAlign: "left" }}>
              {/* <Typography variant="h5" fontWeight={500}>
                Workplace:
              </Typography>
              <Typography id="line1">
                Room 304F Agriculture and Biological Engineering Sciences
                Buildin
              </Typography>
              <Typography id="line2">
                University of Illinois Urbana-Champaign
              </Typography>
              <Typography id="line3">
                Urbana, IL 61801, United States of America
              </Typography>
              <Typography id="mobile">
                Mobile no.: +1(540)605-0215 (USA) +91-8906****30 (India)
              </Typography>
              <Typography id="email">
                Alt Email: chandannitche@gmail.com
              </Typography> */}
              <Typography sx={{ lineHeight: "2.5" }}>
                To,
                <Typography sx={{ lineHeight: "2.5" }}>
                  Atun Roy Choudhury
                </Typography>
                <Typography sx={{ lineHeight: "2.5" }}>Flat no 101,</Typography>
                <Typography sx={{ lineHeight: "2.5" }}>
                  Ashwin Marvel Apartment Uppal Mandal, Hyderabad,{" "}
                </Typography>
                <Typography sx={{ lineHeight: "2.5" }}>
                  Telangana State- 500039 Cell: +91-8838***641
                </Typography>
                Email: atnroy10@gmail.com / atun@cubebioenergy.co.in
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Typography variant="h5" sx={{ color: "#000" }}>
                For any queries, please do not hesitate to contact me.
              </Typography>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <form onSubmit={submitHandler}>
                  <input
                    className="input"
                    style={input}
                    placeholder="Name"
                    type="text"
                    required={true}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></input>
                  <input
                    className="input"
                    style={input}
                    placeholder="Email"
                    type="email"
                    required={true}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                  <input
                    className="input"
                    style={input}
                    placeholder="Subject"
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  ></input>
                  <textarea
                    placeholder="Message"
                    className="input"
                    style={input}
                    id="textArea"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                  <input
                    type="submit"
                    disabled={enable}
                    className="btn"
                    style={{
                      backgroundColor: !enable ? "#1976d2" : "#fafafa",
                      color: !enable ? "#fff" : "#b4b7ba",
                    }}
                  />
                </form>
              )}
            </Item>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ContactMe;
