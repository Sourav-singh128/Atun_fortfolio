import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import { RotatingLines } from "react-loader-spinner";
function About() {
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
          <Box>
            <table>
              <tr>
                {Object.keys(tableData[0]).map((heading) => (
                  <th>{heading}</th>
                ))}
              </tr>
              {tableData.map((row) => (
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
                            // borderRadius: "50%",
                            // border: "2px solid black",
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

export default About;
