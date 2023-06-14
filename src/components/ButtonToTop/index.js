import React from "react";
import { useEffect, useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Fab from '@mui/material/Fab';

const ButtonToTop = () => {
  const [backToTopButton, setbackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setbackToTopButton(true);
      } else {
        setbackToTopButton(false);
      }
    })
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div>
      {backToTopButton && (

        <Fab
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px"
          }}
          onClick={scrollUp}
          variant="extended">
          <ArrowUpwardIcon />
        </Fab>

      )}
    </div>
  );

}
export default ButtonToTop;