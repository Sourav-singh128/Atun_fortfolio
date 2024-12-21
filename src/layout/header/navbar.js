import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import NewDropdown from "../../components/dropdown/newDropdown";

function Navbar() {
  const pages = ["Products", "Pricing", "Blog"];
  const aboutLinks = [
    {
      label: "Education",
      link: "education",
    },
    {
      label: "Honors & Awards",
      link: "honors_&_awards",
    },
    {
      label: "Editor & Reviewer",
      link: "editor_&_reviewers",
    },
    {
      label: "Scholarships",
      link: "scholarships",
    },
    {
      label: "Interviews",
      link: "interviews",
    },
    {
      label: "Record Holding",
      link: "record_holding",
    },
    {
      label: "Patents",
      link: "patent",
    },
    {
      label: "Courses",
      link: "courses",
    },
    {
      label: "Upcoming Events",
      link: "upcoming_events",
    },
  ];
  const publicationLinks = [
    {
      label: "Top 10 Publications",
      link: "top10_publication",
    },
    {
      label: "Journals",
      link: "journal_article",
    },
    {
      label: "Book Chapters",
      link: "book_chapter",
    },
    {
      label: "Magazines",
      link: "magazine_article",
    },
    {
      label: "Conferences",
      link: "conference_article",
    },
    {
      label: "Editorial Ventures",
      link: "editorial_ventures",
    },
    {
      label: "International Collaborators",
      link: "international_collaborators",
    },
    {
      label: "National Collaborators",
      link: "national_collaborators",
    },
  ];
  const moreLinks = [
    {
      label: "Gallery",
      link: "gallery",
    },
    {
      label: "Contact Me",
      link: "contact_me",
    },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="header">
      <AppBar position="static" sx={{ backgroundColor: "darkblue" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-around" }}>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography> */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))} */}
              <Link className="link" to="/">
                <Typography sx={{ color: "white", textAlign: "center" }}>
                  Home{" "}
                </Typography>
              </Link>
            </Box>
            <NewDropdown link={aboutLinks} dropdownName="About" />
            <NewDropdown link={publicationLinks} dropdownName="Publications" />
            <Link className="link" to="experience">
              <Typography sx={{ color: "white", textAlign: "center" }}>
                Experience{" "}
              </Typography>
            </Link>
            <Link className="link" to="lecture_as_resource_person">
              <Typography sx={{ color: "white", textAlign: "center" }}>
                Teaching & Mentorship
              </Typography>
            </Link>
            <NewDropdown link={moreLinks} dropdownName="More" />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navbar;
