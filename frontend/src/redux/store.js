import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobSlice from "./jobSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default storage (localStorage)

const persistConfig = {
    key: "root", // The key under which the state is stored in storage
    version: 1,  // Version of the persisted state
    storage,     // Use localStorage
};

// Combine all reducers
const rootReducer = combineReducers({
    auth: authSlice, // Authentication-related reducer
    job: jobSlice,   // Job-related reducer
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore redux-persist actions
            },
        }),
});

// Export store and persistor
export const persistor = persistStore(store);
export default store;
