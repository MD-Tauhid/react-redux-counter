import { createStore } from "redux";
import counterReducer from "./services/reducers/counterReducer";

const store = createStore(counterReducer);
// store.subscribe();
export default store;