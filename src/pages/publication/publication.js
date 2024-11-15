import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./publication.css";
// import Jounals from "./firebase/journals";
import Firestore from "./firebase/firestore";

function Publication() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("val ", newValue);
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <>
      <p>Publication page</p>
      {/* <Jounals /> */}
      <Firestore />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>

        {value === 0 && (
          <Box>
            <table>
              <tr>
                <th>Authors</th>
                <th>Title</th>
                <th>Journal Title</th>
                <th>Volume</th>
                <th>Number</th>
                <th>Pages</th>
                <th>Year</th>
                <th>Publisher</th>
              </tr>
              <tr>
                <td>
                  Venkatesh, K. R., Choudhury, A. R., Lionel, M. J., &
                  Aruthchelvan, V.
                </td>
                <td>
                  Campus Monitoring System for Annamalai University by Open
                  Source Software and Modern Surveying Application
                </td>
                <td>
                  International Journal of Engineering Science and Technology
                </td>
                <td>8</td>
                <td>6</td>
                <td>89-96</td>
                <td>2016</td>
                <td> </td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </table>
          </Box>
        )}

        {value === 1 && (
          <Box>
            <table>
              <tr>
                <th>Name</th>
                <th>Game</th>
                <th>Fame</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </table>
          </Box>
        )}

        {value === 2 && (
          <Box>
            <table>
              <tr>
                <th>Car</th>
                <th>Bus</th>
                <th>Truck</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </table>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Publication;
