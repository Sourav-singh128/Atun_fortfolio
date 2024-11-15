import { useEffect, useRef, useState } from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import emailjs from "@emailjs/browser";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const input = {
  border: "none",
  width: "100%",
  background: "lightgray",
  height: "28px",
  marginTop: "10px",
};

function ContactMe() {
  const emailRef = useRef();
  const nameRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const textArea = document.querySelector("#textArea");
    if (textArea) {
      textArea.style.height = "60px";
    }
  });

  useEffect(() => {
    emailjs.init("xvIaiOBkVq3wsvLXu");
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const serviceId = "service_ppco3fp";
    const templateId = "template_dl8v0so";
    console.log("name ", nameRef.current.value);
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
        subject: subjectRef.current.value,
        message: messageRef.current.value,
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <p>contact me page</p>
      <div className="page-container">
        <Box>
          <Typography variant="h4">CONTACT INFORMATION</Typography>
          <Box
            sx={{ border: "1px solid black" }}
            width={120}
            margin={"auto"}
            marginTop={1}
          ></Box>
          <Typography marginTop={2} fontFamily={"Tangerine"} fontSize={"2rem"}>
            Department of Agriculture and Biological Engineering University of
            Illinois Urbana-Champaign
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item style={{ textAlign: "left" }}>
              <Typography variant="h5" fontWeight={500}>
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
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Typography variant="h5">
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
                    ref={nameRef}
                  ></input>
                  <input
                    className="input"
                    style={input}
                    placeholder="Email"
                    type="email"
                    required={true}
                    ref={emailRef}
                  ></input>
                  <input
                    className="input"
                    style={input}
                    placeholder="Subject"
                    ref={subjectRef}
                  ></input>
                  <textarea
                    placeholder="Message"
                    className="input"
                    style={input}
                    id="textArea"
                    ref={messageRef}
                  ></textarea>
                  <input type="submit" />
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
