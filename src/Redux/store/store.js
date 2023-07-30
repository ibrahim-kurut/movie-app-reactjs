import { createStore } from "redux";
// import { rootReducer } from "../reducer/rootReducer";

import { movieReducer } from "../reducer/movieReducer";







export const store = createStore(movieReducer);