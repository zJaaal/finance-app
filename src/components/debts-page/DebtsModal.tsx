import { Modal, Backdrop, Fade, Box } from "@mui/material";
import DebtForm from "./DebtForm";

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

const DebtsModal = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: Function;
}) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={() => handleClose()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <DebtForm handleClose={handleClose} />
        </Box>
      </Fade>
    </Modal>
  );
};

export default DebtsModal;
