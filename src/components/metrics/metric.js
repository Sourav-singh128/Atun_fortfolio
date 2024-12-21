import { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import "./metric.css";

const Metric = () => {
  const paperPubRef = useRef(null);
  const paperPubMet = useRef(0);
  const metricBackgroundRef = useRef(null);
  const researchIntRef = useRef(null);
  const researchIntMet = useRef(0);
  const bookPublishedRef = useRef(null);
  const bookPublishedMet = useRef(0);
  const patentRef = useRef(null);
  const patentMet = useRef(0);
  const citationRef = useRef(null);
  const citiationMet = useRef(0);
  const paperReviewedRef = useRef(null);
  const paperReviewedMet = useRef(0);
  const thesisGuidedRef = useRef(null);
  const thesisGuidedMet = useRef(0);
  const bachelorThesisRef = useRef(null);
  const bachelorThesisMet = useRef(0);
  const hIndexRef = useRef(null);
  const hIndexMet = useRef(0);
  const lectureResourcePersonRef = useRef(null);
  const lectureResourcePersonMet = useRef(0);
  const noAwardsRef = useRef(null);
  const noAwardsMet = useRef(0);
  const scholorshipObtainRef = useRef(null);
  const scholorshipObtainMet = useRef(0);

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
    if (paperPubMet.current < 50) {
      paperPubMet.current = paperPubMet.current + 1;
    }
    if (bookPublishedMet.current < 4) {
      bookPublishedMet.current = bookPublishedMet.current + 1;
    }
    if (researchIntMet.current < 697) {
      if (researchIntMet.current >= 690) {
        researchIntMet.current = researchIntMet.current + 1;
      } else {
        researchIntMet.current = researchIntMet.current + 10;
      }
    }
    if (patentMet.current < 2) {
      patentMet.current = patentMet.current + 1;
    }
    if (citiationMet.current < 100) {
      if (citiationMet.current >= 96) {
        citiationMet.current = citiationMet.current + 1;
      } else {
        citiationMet.current = citiationMet.current + 3;
      }
    }
    if (paperReviewedMet.current < 34) {
      paperReviewedMet.current = paperReviewedMet.current + 1;
    }
    if (thesisGuidedMet.current < 6) {
      thesisGuidedMet.current = thesisGuidedMet.current + 1;
    }
    if (bachelorThesisMet.current < 2) {
      bachelorThesisMet.current = thesisGuidedMet.current + 1;
    }
    if (hIndexMet.current < 6) {
      hIndexMet.current = hIndexMet.current + 1;
    }
    if (lectureResourcePersonMet.current < 45) {
      lectureResourcePersonMet.current = lectureResourcePersonMet.current + 1;
    }
    if (noAwardsMet.current < 10) {
      noAwardsMet.current = noAwardsMet.current + 1;
    }
    if (scholorshipObtainMet.current < 10) {
      scholorshipObtainMet.current = scholorshipObtainMet.current + 1;
    }
    if (researchIntMet.current > 697) {
      console.log("metric under 50");
      cancelAnimationFrame(req);
    } else {
      if (paperPubRef.current) {
        paperPubRef.current.innerText = paperPubMet.current + "+";
      }
      if (researchIntRef.current) {
        researchIntRef.current.innerText = researchIntMet.current + "+";
      }
      if (bookPublishedRef.current) {
        bookPublishedRef.current.innerText = bookPublishedMet.current + "+";
      }
      if (patentRef.current) {
        patentRef.current.innerText = patentMet.current;
      }
      if (citationRef.current) {
        citationRef.current.innerText = citiationMet.current + "+";
      }
      if (paperReviewedRef.current) {
        paperReviewedRef.current.innerText = paperReviewedMet.current + "+";
      }
      if (thesisGuidedRef.current) {
        thesisGuidedRef.current.innerText = thesisGuidedMet.current;
      }
      if (bachelorThesisRef.current) {
        bachelorThesisRef.current.innerText = bachelorThesisMet.current;
      }
      if (hIndexRef.current) {
        hIndexRef.current.innerText = hIndexMet.current + "+";
      }
      if (scholorshipObtainRef.current) {
        scholorshipObtainRef.current.innerText =
          scholorshipObtainMet.current + "+";
      }
      if (lectureResourcePersonMet.current) {
        lectureResourcePersonRef.current.innerText =
          lectureResourcePersonMet.current + "+";
      }
      if (noAwardsMet.current) {
        noAwardsRef.current.innerText = noAwardsMet.current + "+";
      }
      setTimeout(() => {
        req = requestAnimationFrame(hanleMetrics);
      }, 50);
    }
  }

  return (
    <>
      <div ref={metricBackgroundRef} className="metric-background">
        <div className="flex-home">
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
          <Box>
            <p ref={bookPublishedRef} className="metric">
              0
            </p>
            <Typography>Number of Books Published</Typography>
          </Box>
          <Box>
            <p ref={patentRef} className="metric">
              0
            </p>
            <Typography>Number of patents</Typography>
          </Box>
          <Box>
            <p ref={citationRef} className="metric">
              0
            </p>
            <Typography>Citation</Typography>
          </Box>
          <Box>
            <p ref={paperReviewedRef} className="metric">
              0
            </p>
            <Typography>Verified Paper reviewed</Typography>
          </Box>
          <Box>
            <p ref={thesisGuidedRef} className="metric">
              0
            </p>
            <Typography>Number of Matter's Thesis Guided</Typography>
          </Box>
          <Box>
            <p ref={bachelorThesisRef} className="metric">
              0
            </p>
            <Typography>Number of Bachelor's Thesis Guided</Typography>
          </Box>
          <Box>
            <p ref={hIndexRef} className="metric">
              0
            </p>
            <Typography>h-index</Typography>
          </Box>
          <Box>
            <p ref={lectureResourcePersonRef} className="metric">
              0
            </p>
            <Typography>Lecture as a Resource Person</Typography>
          </Box>
          <Box>
            <p ref={noAwardsRef} className="metric">
              0
            </p>
            <Typography>Number of Awards</Typography>
          </Box>
          <Box>
            <p ref={scholorshipObtainRef} className="metric">
              0
            </p>
            <Typography>Number of Scholarships Obtained</Typography>
          </Box>
          <Box>
            <p className="metric">57,800+</p>
            <Typography>Article Reads</Typography>
          </Box>
          <Box>
            <p className="metric">1</p>
            <Typography>Number of Records Held</Typography>
          </Box>
          <Box>
            <p className="metric">5000+</p>
            <Typography>LinkedIn Followers</Typography>
          </Box>
          <Box>
            <p className="metric">1</p>
            <Typography>Number of Special Issues</Typography>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Metric;
