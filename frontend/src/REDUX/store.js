import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userAuthReducer from "./userSlice";
import otherUsersReducer from "./Otheruser";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";


const persistStorage = storage.default || storage;

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  otherUsers: otherUsersReducer,
});

const persistConfig = {
  key: "root",
  storage: persistStorage,
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);