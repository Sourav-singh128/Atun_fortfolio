import Cards from "../../components/card";
import { Box } from "@mui/material";
import cards from "./image";
import "./gallery.css";
function Gallery() {
  console.log("gallery page");
  return (
    <>
      <p>This is Gallery page</p>
      <div className="card-container">
        {cards.map((val, ind) => (
          <Cards url={val.imgUrl} desc={val.desc} key={ind} width="30%" />
        ))}
      </div>
    </>
  );
}

export default Gallery;
