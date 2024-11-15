import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./dropdown.css";
import { Link } from "react-router-dom";
function Dropdown(props) {
  const links = props.links;
  const label = props.label;
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          {props.label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={handleChange}
          label="Age"
        >
          {links.map((value) => (
            <Link className="link" to={`${label}/${value.link}`}>
              <MenuItem value="">{value.label}</MenuItem>
            </Link>
          ))}

          {/* <MenuItem value={10}>Book Chapters</MenuItem>
          <MenuItem value={20}>Magazines</MenuItem>
          <MenuItem value={30}>Conferences</MenuItem>
          <MenuItem value={20}>Top 10 Publications</MenuItem>
          <MenuItem value={20}>Editorial Ventures</MenuItem> */}
        </Select>
      </FormControl>
    </>
  );
}

export default Dropdown;
