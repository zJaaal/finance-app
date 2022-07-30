import { useState } from "react";
import { useDispatch } from "react-redux";

import ModalType from "./ModalType";

import { earningCleanActive } from "../../actions/earning/earning";
import EarningActions from "../../actions/earning/enum/EarningActions";

import { savingCleanActive } from "../../actions/saving/saving";
import SavingActions from "../../actions/saving/enum/SavingActions";

import { expenseCleanActive } from "../../actions/expense/expense";
import ExpenseActions from "../../actions/expense/enum/ExpenseActions";

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
      case ModalType.EXPENSE: {
        setIsOpen(false);
        dispatch<expenseCleanActive>({
          type: ExpenseActions.EXPENSE_CLEAN_ACTIVE,
        });
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
