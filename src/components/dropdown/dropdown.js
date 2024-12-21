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
          // labelId="demo-simple-select-standard-label"
          // id="demo-simple-select-standard"
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          label="Age"
        >
          {links.map((value) => (
            <Link className="link" to={`${label.toLowerCase()}/${value.link}`}>
              <MenuItem value="">{value.label}</MenuItem>
            </Link>
          ))}
        </Select>
        {/* <select
          className="dropdown"
          onChange={() => {
            console.log("onChange fire");
          }}
        
        >
          {links.map((value) => (
            <option id="option" value={`${label}/${value.link}`}>
              <Link className="link" to={`${label}/${value.link}`}>
                {value.label}
              </Link>
            </option>
          ))}
        </select> */}
      </FormControl>
    </>
  );
}

export default Dropdown;
