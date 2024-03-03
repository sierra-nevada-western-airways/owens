import type { Ref } from "vue";
import type { ApplicationState } from "./ApplicationState";
import type IAction from "./actions/IAction";

export default interface IApplicationStore {
  state: Ref<ApplicationState>;
  dispatcher: (action: IAction) => void;
}
