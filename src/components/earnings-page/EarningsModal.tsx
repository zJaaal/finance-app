import { Modal, Backdrop, Fade, Box, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanActiveEarning } from "../../actions/earning/earning";
import { modalClose } from "../../actions/ui/modal";
import { IRootState } from "../../reducers/rootReducer";
import EarningForm from "./EarningForm";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "80%",
    sm: "60%",
  },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const EarningsModal = () => {
  const isOpen = useSelector((state: IRootState) => state.modal.isOpen);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(modalClose());
    dispatch(cleanActiveEarning());
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <EarningForm />
        </Box>
      </Fade>
    </Modal>
  );
};

export default EarningsModal;
