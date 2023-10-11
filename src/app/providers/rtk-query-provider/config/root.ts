import { configureStore } from "@reduxjs/toolkit";

import { IS_DEV } from "@/shared/lib/constants";
import { postApi } from "@/entities/posts";

const { middleware, reducerPath, reducer } = postApi;

export function createReduxStore() {
  const store = configureStore({
    reducer: {
      [reducerPath]: reducer,
    },
    devTools: IS_DEV,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
  });

  return store;
}
