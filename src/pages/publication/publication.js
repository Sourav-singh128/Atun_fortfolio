import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./publication.css";
import Firestore from "./firebase/firestore";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

function Publication() {
  const [value, setValue] = React.useState(0);
  const [pubHeading, setPubHeading] = useState([]);
  const [pubBody, setPubBody] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const urlArr = location.pathname.split("/");
  const url = urlArr[urlArr.length - 1];
  console.log(url);
  let urlRegex = /(https?:\/\/[^\s]+)/g;

  const handleChange = (event, newValue) => {
    console.log("val ", newValue);
    setValue(newValue);
  };

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
      setPubHeading(data.slice(0, 1));
      setPubBody(data.slice(1));
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
                {Object.keys(pubHeading[0]).map((heading) => (
                  <th>{heading}</th>
                ))}
              </tr>
              {pubBody.map((row) => (
                <tr>
                  {Object.keys(row).map((col) => {
                    return String(row[col]).match(urlRegex) !== null ? (
                      <td>
                        <Link to={row[col]} className="link">
                          link
                        </Link>
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

export default Publication;
