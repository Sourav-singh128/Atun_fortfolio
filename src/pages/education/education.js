import { Typography, Box } from "@mui/material";
import "./education.css";
const Education = () => {
  return (
    <>
      {/* <div className="education-container">
        <Typography variant="h3">Education</Typography>
        <Box>
          <Typography>
            <span>P.H.D</span>, Environmental Science & Technology{" "}
          </Typography>
          <Typography>
            <span>BITS Pilani Hyderabad Campus</span>{" "}
          </Typography>
          <Typography>Accomplishment: Direct viva approval</Typography>
        </Box>
        <Box>
          <Typography>
            <span>M.E.</span>, Environmental Engineering{" "}
          </Typography>
          <Typography>
            <span>Annamalai University,</span> Chidambaram{" "}
          </Typography>
          <Typography>
            CGPA: 9.0{" "}
            <span>(Distinction with Gold Medal; 1st Rank Holder)</span>{" "}
          </Typography>
        </Box>
        <Box>
          <Typography>
            <span>B.E.</span>, Civil Engineering{" "}
          </Typography>
          <Typography>
            <span>Annamalai University,</span> Chidambaram{" "}
          </Typography>
          <Typography>
            CGPA: 8.9 <span>(2nd Rank Holder)</span>{" "}
          </Typography>
        </Box>
      </div> */}

      <table>
        <tr>
          <th>Degree</th>
          <th>Major</th>
          <th>Tenure</th>
          <th>Grade</th>
          <th>Achievement</th>
          <th>Institute</th>
          <th>Rank/ Prestige</th>
        </tr>
        <tr>
          <td>Bachelor of Engineering</td>
          <td>Civil Engineering</td>
          <td>2012-2016</td>
          <td>8.9/ 10</td>
          <td>University 2nd Rank Holder</td>
          <td>Annamalai University</td>
          <td>QS World Rank: 383</td>
        </tr>
        <tr>
          <td>Master of Engineering</td>
          <td>Environmental Engineering </td>
          <td>2016-2018</td>
          <td>9.0/ 10</td>
          <td>Distinction & Gold Medal; 1st Rank Holder</td>
          <td>Annamalai University</td>
          <td>QS World Rank: 383</td>
        </tr>
        <tr>
          <td>Doctor of Philosophy</td>
          <td>Environmental Science & Technology</td>
          <td>2019-2024</td>
          <td>N.A.</td>
          <td>Direct Viva Approval</td>
          <td>BITS Pilani</td>
          <td>Institution of Eminence</td>
        </tr>
      </table>
    </>
  );
};
export default Education;
