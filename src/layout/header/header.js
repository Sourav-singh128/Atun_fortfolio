import { Link } from "react-router-dom";
import "./header.css";
import hero from "../../image/pilani_background.jfif";
import Marquee from "react-fast-marquee";
import Dropdown from "../../components/dropdown/dropdown";
import { Typography } from "@mui/material";
import Navbar from "./navbar";
function Header() {
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
      link: "editor_&_reviewer",
    },
    {
      label: "Scholarships",
      link: "scholarship",
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
      label: "Upcoming Events",
      link: "upcoming_events",
    },

    {
      label: "Patents",
      link: "patent",
    },
    {
      label: "Courses",
      link: "courses",
    },
  ];

  const more = [
    {
      label: "Gallery",
      link: "gallery",
    },
    {
      label: "Contact Me",
      link: "contact_me",
    },
  ];
  return (
    <>
      <div className="hero-sec">
        <img src={hero} alt="hero-img" className="hero-img" />
        <div className="hero-text">
          <Typography
            variant="h3"
            sx={{
              fontWeight: "700",
              color: "darkblue",
              fontFamily: "Fredericka the Great, serif",
              fontStyle: "normal",
            }}
          >
            Dr. Atun Roy Choudhury
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: "700", color: "darkblue", marginTop: "9.5%" }}
          >
            Environmentalist
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
      {/* <div className="header">
        <Link className="link" to="/">
          Home{" "}
        </Link>
        <Dropdown links={aboutLinks} label="About" />
        <Dropdown links={publicationLinks} label="Publications" />
        <Link className="link" to="experience">
          Experience{" "}
        </Link>
        <Link className="link" to="lecture_as_resource_person">
          Teaching & Mentorship
        </Link>
        <Dropdown links={more} label="More" />
      </div> */}
      <Navbar />
    </>
  );
}

export default Header;
