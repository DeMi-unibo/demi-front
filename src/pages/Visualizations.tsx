import React, { useEffect } from "react";
import { Heading, Box } from "@chakra-ui/react";
import createMapChart from "../utils/createMapChart";

function Visualizations() {
  useEffect(() => {
    const root = createMapChart("chartdiv"); // Type is now am5.Root

    return () => {
      if (root) { // Safeguard in case root is somehow null
        root.dispose();
      }
    };
  }, []);

  return (
    <Box>
      <Heading>Visualizations Page</Heading>
      <Box id="chartdiv" width="100%" height="500px"></Box>
    </Box>
  );
}

export default Visualizations;