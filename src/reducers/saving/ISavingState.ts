import ISaving from "../../interfaces/ISaving";

interface ISavingState {
  activeSaving: ISaving | null;
  savings: ISaving[];
}

export default ISavingState;
