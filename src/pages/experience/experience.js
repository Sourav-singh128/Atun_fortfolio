import { Typography } from "@mui/material";
import "./experience.css";
import Symbol from "./symbol";
function Experience() {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ marginTop: "2%", textAlign: "justify", padding: "0 5%" }}
      >
        PROFESSIONAL ACCOMPLISHMENTS
      </Typography>
      <div className="text-container">
        <div className="para">
          <span className="asterik">&#42;</span>
          {"      "}
          <span>
            Successfully concluded about 5 lakhs MT of Biomining so far.{" "}
          </span>
        </div>
        <div className="para">
          <span className="asterik">&#42;</span>
          {"      "}
          <span>
            Successfully handling 500+ tons of fresh MSW projects daily.{" "}
          </span>
        </div>
        <div className="para">
          <span className="asterik">&#42;</span>
          {"      "}
          <span>
            Successfully handled 100+ KLD fecal sludge treatment daily.{" "}
          </span>
        </div>
        <div className="para">
          <span className="asterik">&#42;</span>
          {"      "}
          <span>
            Led a team in the design and recovery of salts, alternate fuels,
            processed aggregates, and disinfectants from different waste
            streams.{" "}
          </span>
        </div>
        <div className="para">
          <span className="asterik">&#42;</span>
          {"      "}
          <span>
            Conducted environmental impact assessment and clearance for various
            waste management projects{" "}
          </span>
        </div>

        <div className="para">
          <span className="asterik">&#42;</span>
          {"      "}
          <span>
            Developed and implemented a sustainable waste management system for
            a large ISWM, MRF, DRCC, TSDF, and Biomining plant, resulting in a
            reduction in waste generation, landfilling, and cost savings.{" "}
          </span>
        </div>
        <div className="para">
          <span className="asterik">&#42;</span>
          {"      "}
          <span>
            Developed and implemented an environmental management system for
            Cube Bio, resulting in ISO 14001, 45001, and 9001 certifications and
            improved environmental performance.{" "}
          </span>
        </div>
      </div>

      <div>
        <table>
          <tr>
            <th>No.</th>
            <th>Organization</th>
            <th>Designation</th>
            <th>Key Roles and Responsibilities</th>
            <th>Service Year</th>
          </tr>
          <tr>
            <td>1</td>
            <td className="sec-col">Cube Bio Energy Pvt. Ltd.</td>
            <td>
              <p>Assistant General Manager</p>
              <p>(Head- Technical & Safety)</p>
            </td>
            <td>
              <Symbol text="Project Management & Process Innovation" />
              <Symbol text="Technical Assistance" />
              <Symbol text="Business Development & Liaison" />
              <Symbol text="Revenue Optimization & Efficiency" />
              <Symbol text="Operational Leadership & Team Management" />
              <Symbol text="Strategic Procurement & Negotiation" />
            </td>
            <td>November 2022 to Till Date</td>
          </tr>
          <tr>
            <td>2</td>
            <td className="sec-col">Eco India Projects Pvt. Ltd.</td>
            <td>Head- Technical and Planning </td>
            <td>
              <Symbol text="Project Liasoning, Licensing, Design, BOQ preparation, Erection, Commissioning, and O&M of massive Biomining projects." />
              <Symbol text="Worked flexible hours across night, weekend, and holiday shifts." />
              <Symbol text="Applied effective time management techniques to meet tight deadlines." />
            </td>
            <td>March 2022 - October 2022</td>
          </tr>
          <tr>
            <td>3</td>
            <td className="sec-col">Banka Bio Limited</td>
            <td>Manager- Technical and Compliance</td>
            <td>
              <Symbol text="Set up new Faecal sludge treatment plants and laboratory, enhanced offerings, and looked after R&D and operation of FSTPs." />
              <Symbol text="Developed and maintained relationships with suppliers, enhanced credit period and reduced purchase costs significantly." />
              <Symbol text="Improved safety procedures to create safe working conditions for workers through rigorous audits." />
              <Symbol text="Improved marketing to attract new customers and promote business." />
              <Symbol text="Streamlined and monitored quality programs to alleviate overdue compliance activities." />
            </td>
            <td>July 2020 - February 2022</td>
          </tr>
          <tr>
            <td>4</td>
            <td className="sec-col">Ramky Enviro Engineers Ltd.</td>
            <td>Scientific Officer (Asst. Manager)- R&D</td>
            <td>
              <Symbol text="Demonstrated creativity and resourcefulness through the development of innovative waste management solutions." />
              <Symbol text="Strengthened environmental and operational safety of waste management facilities through hazard identification and elimination" />
            </td>
            <td>June 2018 - June 2020</td>
          </tr>
          <tr>
            <td>5</td>
            <td className="sec-col">IL&FS Environment</td>
            <td>Jr. Executive</td>
            <td>
              <Symbol text="Conducted optimization experiments related to bulk drug industry wastewater treatment processes, analyzed the results, and optimized unit operations for improved efficiency." />
              <Symbol text="Provided technical support for setting up the treatment plant and performing safety audits on a regular basis." />
            </td>
            <td>December 2017 - May 2018</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Experience;
