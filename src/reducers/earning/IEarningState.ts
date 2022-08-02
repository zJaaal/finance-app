import IEarning from "../../interfaces/IEarning";

interface IEarningState {
  earnings: IEarning[];
  activeEarning: IEarning | null;
}

export default IEarningState;
