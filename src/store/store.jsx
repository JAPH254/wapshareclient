//react toolkit store
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import postsReducer from "./postsSlice";
import storiesReducer from "./storiesSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

//configure the store with the reducers
const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  stories: storiesReducer,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({ reducer: persistedReducer });
export const Persistor = persistStore(store);

// export default store;
