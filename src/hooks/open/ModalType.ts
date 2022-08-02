import IEarningState from "../../reducers/earning/IEarningState";
import ISavingState from "../../reducers/saving/ISavingState";

enum ModalType {
  EARNING = "EARNING_MODAL",
  SAVING = "SAVING_MODAL",
  EXPENSE = "EXPENSE_MODAL",
  DEBT = "DEBT_MODAL",
  PAYMENT = "PAYMENT_MODAL",

  GENERAL = "GENERAL_MODAL",
}

export default ModalType;
