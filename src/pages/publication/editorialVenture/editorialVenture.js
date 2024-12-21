import { Typography } from "@mui/material";
import editedBioWaste from "../../../image/editedBioWaste.jpg";
import editedSolidWaste from "../../../image/editedSolidWaste.jpg";
import chapter_microbial from "../../../image/chapter_microbial.jpg";
import flyer_bentham from "../../../image/flyer_bentham.jpg";
import "./editorialVenture.css";
import Cards from "../../../components/card";

const editorial_venture_img = [
  {
    url: editedBioWaste,
  },
  {
    url: editedSolidWaste,
  },
  {
    url: chapter_microbial,
  },
  {
    url: flyer_bentham,
  },
];
function EditorialVenture() {
  return (
    <>
      <div className="editorial_img_container">
        {editorial_venture_img.map((img, ind) => (
          <Cards url={img.url} width="45%" height="500" key={ind} />
        ))}
      </div>
      <ol>
        <Typography variant="h4" sx={{ marginTop: "4%", marginBottom: "2%" }}>
          Ongoing Assignment
        </Typography>
        <div className="flex">
          <li>
            Microbial Nexus Approach to Improve Sanitation in Developing
            Nations”, Atun Roy Choudhury, et al., Ongoing, Apple Academic Press
            (Co-publishing with CRC Press), 2025
          </li>
          <li>
            Sustainable Energy from Waste”, Atun Roy Choudhury, et al., Ongoing,
            Royal Society of Chemistry, 2025.
          </li>
          <li>
            Circular Economy of Dark Fermentation and Biomethanation”, Atun Roy
            Choudhury, et al., Ongoing, Springer, 2025.
          </li>
          <li>
            Sustainable Leachate Treatment: Advances and Next-Generation
            Technologies”, Atun Roy Choudhury, et al., Ongoing, Springer, 2025.
          </li>
          <li>
            Resource Recovery from Biomedical and Hazardous Industrial Waste:
            Challenges and Opportunities”, Atun Roy Choudhury, et al., Ongoing,
            Elsevier, 2025.
          </li>
          <li>
            Emerging Contaminants and Environmental Interactions: Occurrence,
            Remediation, and Pathway to Policy-Making”, Atun Roy Choudhury, et
            al., Ongoing, Bentham Science, 2025.
          </li>
          <li>
            Functional Approach of Remote Sensing and GIS in Ecology and
            Critical Environmental Engineering Applications”, Atun Roy
            Choudhury, et al., Ongoing, Apple Academic Press (Co-publishing with
            CRC Press), 2025.
          </li>
        </div>
      </ol>
    </>
  );
}

export default EditorialVenture;
