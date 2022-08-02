import { useState } from "react";
import { useDispatch } from "react-redux";

import ModalType from "./ModalType";

import { earningCleanActive } from "../../actions/earning/earningActions";
import EarningActions from "../../actions/earning/enum/EarningActions";

import { savingCleanActive } from "../../actions/saving/savingActions";
import SavingActions from "../../actions/saving/enum/SavingActions";

import { expenseCleanActive } from "../../actions/expense/expenseActions";
import ExpenseActions from "../../actions/expense/enum/ExpenseActions";
import { debtCleanActive } from "../../actions/debt/debtActions";
import DebtActions from "../../actions/debt/enum/DebtActions";
import { paymentCleanActive } from "../../actions/payment/paymentActions";
import PaymentActions from "../../actions/payment/enum/PaymentActions";

const useOpen = (type: ModalType) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    switch (type) {
      case ModalType.EARNING: {
        setIsOpen(false);
        dispatch<earningCleanActive>({
          type: EarningActions.EARNING_CLEAN_ACTIVE,
        });
        break;
      }
      case ModalType.SAVING: {
        setIsOpen(false);
        dispatch<savingCleanActive>({
          type: SavingActions.SAVING_CLEAN_ACTIVE,
        });
        break;
      }
      case ModalType.EXPENSE: {
        setIsOpen(false);
        dispatch<expenseCleanActive>({
          type: ExpenseActions.EXPENSE_CLEAN_ACTIVE,
        });
        break;
      }
      case ModalType.DEBT: {
        dispatch<debtCleanActive>({
          type: DebtActions.DEBT_CLEAN_ACTIVE,
        });
        setIsOpen(false);
        break;
      }
      case ModalType.PAYMENT: {
        setIsOpen(false);
        dispatch<paymentCleanActive>({
          type: PaymentActions.PAYMENT_CLEAN_ACTIVE,
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
