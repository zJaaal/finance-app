import IModal from "./IModal";

interface IModalAction {
  type: string;
  payload?: IModal;
}

export default IModalAction;
