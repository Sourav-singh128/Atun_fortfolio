import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { Box, IconButton, Typography, Menu } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function NewDropdown(props) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  console.log("props ", props.link);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
          <Typography sx={{ color: "white", textAlign: "center" }}>
            {props.dropdownName}
          </Typography>
          <ArrowDropDownIcon sx={{ color: "white", fontSize: "larger" }} />
        </IconButton>

        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {props.link.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Link
                className="link"
                to={`${props.dropdownName.toLowerCase()}/${setting.link}`}
              >
                <Typography sx={{ textAlign: "center" }}>
                  {setting.label}
                </Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}

export default NewDropdown;
