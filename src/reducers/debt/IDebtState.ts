import IDebt from "../../interfaces/IDebt";

interface IDebtState {
  debts: IDebt[];
  activeDebt: IDebt | null;
}

export default IDebtState;
