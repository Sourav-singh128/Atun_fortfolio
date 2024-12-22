import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { RotatingLines } from "react-loader-spinner";
import patentLarval from "./image/patent_larval.jpg";
import saana_reactor from "./image/saana_reactor.png";

const textStyle = {
  padding: "0 5%",
  textAlign: "justify",
  fontSize: "18px",
  lineHeight: "2.5",
};
const TableWithHyphen = () => {
  const imagePatent = [
    {
      url: patentLarval,
      alt: "Published Patent Details_ Intergral Larval Grub Composting reactor",
    },
    {
      url: saana_reactor,
      alt: "Published Patent SAANA Reactor",
    },
  ];
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
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
    }
    netlifyFunc();
  }, [url]);

  return (
    <>
      {url === "editor_&_reviewer" ? (
        <p style={textStyle}>
          Serving as an Editor and Reviewer (Elsevier Certified) with all major
          publication houses such as Elsevier, Springer Nature, Wiley, Taylor &
          Francis, PeerJ, IntechOpen, Bentham Science, etc.Reviewed so far 32
          papers for various journals (verified in Publons- Web of Sciences).
        </p>
      ) : url === "scholarship" ? (
        <p style={textStyle}>Total Amount: 1030 USD</p>
      ) : url === "patent" ? (
        imagePatent.map((image) => (
          <img src={image.url} alt={image.alt} style={{ width: "50%" }} />
        ))
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
                    <td>
                      {String(row[col]).search("-") !== -1 ? (
                        row[col]
                          .split("-")
                          .filter((len) => len.length > 0)
                          .map((val) => val.replaceAll("\n", ""))
                          .map((newVal) => (
                            <p>
                              <span className="asterik">&#42;</span>
                              {newVal}
                            </p>
                          ))
                      ) : (
                        <p>{row[col]}</p>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </table>
          </Box>
        )}
      </Box>
    </>
  );
};

export default TableWithHyphen;
