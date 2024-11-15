import { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import "./metric.css";

const Metric = () => {
  const paperPubRef = useRef(null);
  const paperPubMet = useRef(0);
  const metricBackgroundRef = useRef(null);
  const researchIntRef = useRef(null);
  const researchIntMet = useRef(0);
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      console.log("entry ", entries);
      console.log("check intersectiong ", entry.isIntersecting);
      if (entry.isIntersecting) {
        hanleMetrics();
      }
    });
    observer.observe(metricBackgroundRef.current);
  }, []);

  function hanleMetrics() {
    let req;
    console.log("function called");
    if (paperPubMet.current < 51) {
      paperPubMet.current = paperPubMet.current + 1;
    }
    if (researchIntMet.current < 698) {
      researchIntMet.current = researchIntMet.current + 10;
    }
    if (researchIntMet.current > 697) {
      console.log("metric under 50");
      cancelAnimationFrame(req);
    } else {
      if (paperPubRef.current && researchIntRef.current) {
        console.log("handle metrics called ");
        paperPubRef.current.innerText = paperPubMet.current;
        researchIntRef.current.innerText = researchIntMet.current;
      }
      setTimeout(() => {
        req = requestAnimationFrame(hanleMetrics);
      }, 50);
    }
  }

  return (
    <>
      <div ref={metricBackgroundRef} className="metric-background">
        <div className="flex">
          <Box>
            <p ref={paperPubRef} className="metric">
              0
            </p>
            <Typography>No. of paper Publication</Typography>
          </Box>
          <Box>
            <p ref={researchIntRef} className="metric">
              0
            </p>
            <Typography>Research Interest Score</Typography>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Metric;
