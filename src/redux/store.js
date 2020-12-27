import { createStore } from "redux";
import { quoteReducer } from "./quoteReducer";
export const store = createStore(quoteReducer);
