import { Link } from "react-router-dom";
import "./header.css";
import hero from "../../image/pilani_background.jfif";
import Marquee from "react-fast-marquee";
import Dropdown from "../../components/dropdown/dropdown";
import { Typography } from "@mui/material";
function Header() {
  const publicationLinks = [
    {
      label: "Journals",
      link: "journals",
    },
    {
      label: "Book Chapters",
      link: "book_chapters",
    },
    {
      label: "Magazines",
      link: "magazines",
    },
    {
      label: "Conferences",
      link: "conferences",
    },
    {
      label: "Top 10 Publications",
      link: "top_10_publications",
    },
    {
      label: "Editorial Ventures",
      link: "editorial_ventures",
    },
  ];

  const moreLinks = [
    {
      label: "Gallery",
      link: "gallery",
    },
    {
      label: "Contact Us",
      link: "contact_us",
    },
    {
      label: "Goggle Scholar",
      link: "google_scholor",
    },
  ];
  return (
    <>
      <div className="hero-sec">
        <img src={hero} alt="hero-img" className="hero-img" />
        <div className="hero-text">
          <Typography variant="h3" sx={{ fontWeight: "700", color: "white" }}>
            Dr. Atun Roy Choudhury
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: "700", color: "white", marginTop: "5.5%" }}
          >
            Environmental Engineer
          </Typography>
          <Marquee
            style={{
              color: "ivory",
              fontWeight: "700",
              fontSize: "large",
              marginTop: "3%",
            }}
            pauseOnHover
            speed={70}
            delay={2}
            direction="left"
          >
            Driving Innovation in Sustainable Waste Management and Environmental
            Solutions: Turning Trash into Treasure
          </Marquee>
        </div>
      </div>
      <div className="header">
        <Link className="link" to="/">
          Home{" "}
        </Link>
        <Link className="link" to="about">
          About Me
        </Link>
        {/* <Link className="link" to="publication">
          Publications{" "}
        </Link> */}
        <Dropdown links={publicationLinks} label="publication" />
        <Link className="link" to="presentation">
          Presentations{" "}
        </Link>
        <Link className="link" to="industry_visit">
          Industry Visit{" "}
        </Link>
        <Link className="link" to="tech_for_fun">
          Tech for Fun
        </Link>
        {/* <Link className="link" to="gallery">
          More
        </Link> */}
        <Dropdown links={moreLinks} label="more" />
        <Link className="link" to="contact_me">
          Contact Me{" "}
        </Link>
      </div>
    </>
  );
}

export default Header;
