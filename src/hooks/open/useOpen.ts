import { useState } from "react";
import { useDispatch } from "react-redux";
import { earningCleanActive } from "../../actions/earning/earning";
import EarningActions from "../../actions/earning/enum/EarningActions";
import SavingActions from "../../actions/saving/enum/SavingActions";
import { savingCleanActive } from "../../actions/saving/saving";
import ModalType from "./ModalType";

const useOpen = (type: ModalType) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    switch (type) {
      case ModalType.EARNING: {
        setIsOpen(false);
        dispatch<earningCleanActive>({
          type: EarningActions.earningCleanActive,
        });
        break;
      }
      case ModalType.SAVING: {
        setIsOpen(false);
        dispatch<savingCleanActive>({ type: SavingActions.savingCleanActive });
        break;
      }
      default:
        return setIsOpen(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return { isOpen, handleOpen, handleClose };
};

export default useOpen;
