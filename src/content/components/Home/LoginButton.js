import { Modal, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../contexts/contexts";

export default function LoginButton() {
  const { slideUp, handleClose } = useContext(HomeContext);

  return (
    <Modal
      open={slideUp}
      onClose={handleClose}
      sx={{ backdropFilter: "blur(5px)" }}
      componentsProps={{
        backdrop: {
          // transitionDuration: 1000,
        },
      }}
    >
      <div>
        <InnerModal slideUp={slideUp} handleClose={handleClose} />
      </div>
    </Modal>
  );
}

const InnerModal = ({ slideUp, handleClose }) => {
  const [animate, setanimate] = useState(false);
  useEffect(() => {
    if (!slideUp) setanimate(false);
    setanimate(true);

    return () => setanimate(false);
  }, [slideUp]);
  return (
    <Container
      // maxWidth={"xl"}
      sx={{
        position: "absolute",
        top: "150%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        transition: "all 200ms ease",
        opacity: 0,
        outline: 0,
        userSelect: "none",
        ...(animate && {
          top: "50%",
          opacity: 1,
        }),
      }}
    >
      <Stack width={"100%"} spacing={4} alignItems="center">
        <Typography sx={{ ...classes.button }} onClick={handleClose}>
          <Typography variant="span" sx={{ ...classes.span }}>
            {"-"}
          </Typography>
          {"Login"}
        </Typography>
        <Typography sx={{ ...classes.button }}>
          <Typography variant="span" sx={{ ...classes.span }}>
            {"-"}
          </Typography>
          {"Play as Guest"}
        </Typography>
      </Stack>
    </Container>
  );
};

const classes = {
  span: {
    fontSize: "4vw",
    fontFamily: "'Nabla', cursive",
    cursor: "pointer",
    textShadow: "0px 0px 2px black",
    color: "primary.main",
    transition: "all 200ms ease",
    display: "inline-block",
    transform: "translateX(-200vw)",
  },
  button: {
    fontSize: "4vw",
    fontFamily: "'Nabla', cursive",
    cursor: "pointer",
    textShadow: "0px 0px 2px black",
    color: "primary.main",
    transition: "all 200ms ease",
    "&:hover": {
      transform: "scale(1.08)",
    },
    "&:hover span": {
      transform: "translateX(-15px)",
    },
  },
};
