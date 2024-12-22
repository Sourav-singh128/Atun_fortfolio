import React, { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Box } from "@mui/material";
import Cards from "../../components/card";

function GalleryCloudinary() {
  const [cloudinaryImg, setCloudinaryImg] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function netlifyFunc() {
      const res = await fetch(
        "https://atunportfolio.netlify.app/.netlify/functions/cloudinary-function",
        {
          method: "post",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify({ folder: "gallery" }),
        }
      );
      const data = await res.json();
      setCloudinaryImg(data.resources);
      setLoading(false);
      console.log("data-cloud ", data.resources);
    }
    netlifyFunc();
  }, []);
  return (
    <>
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
          <div className="card-container">
            {cloudinaryImg.map((val, ind) => (
              <Cards
                url={val.secure_url}
                desc={val.desc}
                key={ind}
                width="30%"
                height="350"
              />
            ))}
          </div>
        )}
      </Box>
    </>
  );
}

export default GalleryCloudinary;
