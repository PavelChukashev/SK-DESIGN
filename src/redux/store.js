import { configureStore } from "@reduxjs/toolkit";
import Request from "./request";

export const store = configureStore({
  reducer: {
    request: Request,
  },
});
