import ISaving from "../../interfaces/ISaving";

interface ISavingAction {
  type: string;
  payload: ISaving;
}

export default ISavingAction;
