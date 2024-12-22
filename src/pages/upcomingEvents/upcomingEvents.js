import React, { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useLocation, Link } from "react-router-dom";
import Cards from "../../components/card";
import { Box, Button } from "@mui/material";
import "./upcomingEvents.css";

function UpcomingEvents() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const urlArr = location.pathname.split("/");
  const url = urlArr[urlArr.length - 1];
  console.log(url);
  const regex = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;
  useEffect(() => {
    async function netlifyFunc() {
      const res = await fetch(
        "https://atunportfolio.netlify.app/.netlify/functions/publication-function",
        {
          method: "post",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify({ url: url }),
        }
      );
      const data = await res.json();
      console.log("data ", data);
      setTableData(data);
      setLoading(false);
    }
    netlifyFunc();
  }, [url]);
  return (
    <>
      {/* <p>upcomming events page</p> */}
      <Box>
        {loading ? (
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          <div className="event-container">
            {tableData.map((data) => (
              <div className="cloud-img">
                <Cards url={data.image} width="80%" />
                <Link
                  to={data.registerLink}
                  target="_blank"
                  style={{ width: "28%" }}
                >
                  <Button variant="contained" sx={{ width: "100%" }}>
                    CLICK HERE
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </Box>
    </>
  );
}

export default UpcomingEvents;
