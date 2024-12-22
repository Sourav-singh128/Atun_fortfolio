import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { RotatingLines } from "react-loader-spinner";
import "./about.css";
function NestedRow() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const urlArr = location.pathname.split("/");
  const url = urlArr[urlArr.length - 1];
  console.log(url);
  const regex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
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
                    return Array.isArray(row[col]) ? (
                      <td className="column">
                        {row[col].map((nest) => {
                          return String(nest).match(regex) !== null ? (
                            <tr style={{ height: "160px" }}>
                              <td className="border">
                                <img
                                  src={nest}
                                  alt={nest}
                                  style={{
                                    height: "130px",
                                    width: "130px",
                                    // borderRadius: "50%",
                                    // border: "2px solid black",
                                  }}
                                />
                              </td>
                            </tr>
                          ) : (
                            <tr
                              style={{
                                height:
                                  url === "editor_&_reviewers"
                                    ? "60px"
                                    : "160px",
                              }}
                            >
                              <td className="border">{nest}</td>
                            </tr>
                          );
                        })}
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

export default NestedRow;
