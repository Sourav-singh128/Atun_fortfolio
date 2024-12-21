import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
function Collaborators() {
  const [inCollabBody, setInCollabBody] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const urlArr = location.pathname.split("/");
  const url = urlArr[urlArr.length - 1];
  const regex = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;
  useEffect(() => {
    async function netlifyFunc() {
      const res = await fetch(
        "http://localhost:8888/.netlify/functions/publication-function",
        {
          method: "post",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify({ url: url }),
        }
      );
      const data = await res.json();
      console.log("data ", data);
      setInCollabBody(data);
      setLoading(false);
    }
    netlifyFunc();
  }, [url]);
  return (
    <>
      {url === "national_collaborators" ? (
        <Typography variant="h4" sx={{ paddingTop: "2%" }}>
          Top National Collaborations
        </Typography>
      ) : url === "international_collaborators" ? (
        <Typography variant="h4" sx={{ paddingTop: "2%" }}>
          Top International Collaborations
        </Typography>
      ) : null}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
          <Box sx={{ fontSize: "large" }}>
            <table>
              <tr>
                {Object.keys(inCollabBody[0]).map((heading) => (
                  <th>{heading}</th>
                ))}
              </tr>
              {inCollabBody.map((row) => (
                <tr>
                  {Object.keys(row).map((col) => {
                    return String(row[col]).match(regex) !== null ? (
                      <td>
                        <img
                          src={row[col]}
                          alt={row[col]}
                          style={{
                            height: "151px",
                            width: "150px",
                            borderRadius: "50%",
                            border: "2px solid black",
                          }}
                        />
                      </td>
                    ) : (
                      <td>{row[col]}</td>
                    );
                  })}
                </tr>
              ))}
            </table>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Collaborators;
