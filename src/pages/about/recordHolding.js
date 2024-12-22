import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { RotatingLines } from "react-loader-spinner";
function RecordHolding() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cloudinaryImg, setCloudinaryImg] = useState([]);
  const location = useLocation();
  const urlArr = location.pathname.split("/");
  const url = urlArr[urlArr.length - 1];
  console.log(url);
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
      const cloudres = await fetch(
        "http://localhost:8888/.netlify/functions/cloudinary-function",
        {
          method: "post",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify({ folder: "record_holding" }),
        }
      );
      const clouddata = await cloudres.json();
      setCloudinaryImg(clouddata.resources);
      setLoading(false);
      console.log("data-cloud ", clouddata.resources);
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {cloudinaryImg.map((img) => (
                <img
                  src={img.secure_url}
                  alt={img.display_name}
                  style={{ width: "50%" }}
                />
              ))}
            </Box>
            <Box>
              <table>
                <tr>
                  {Object.keys(tableData[0]).map((heading) => (
                    <th>{heading}</th>
                  ))}
                </tr>
                {tableData.map((row) => (
                  <tr>
                    {Object.keys(row).map((col) => (
                      <td>{row[col]}</td>
                    ))}
                  </tr>
                ))}
              </table>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}

export default RecordHolding;
