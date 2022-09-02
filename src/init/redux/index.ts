// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import toggles from '../../bus/client/toggles';
import infoFields from '../../bus/client/infoFields';
import contactFields from '../../bus/client/contactFields/slice';
import languageFields from '../../bus/client/languageFields';
import experienceFields from '../../bus/client/experienceFields';
import educationFields from '../../bus/client/educationFields';

// Middleware
import {
    middleware,
} from './middleware';

export const store = configureStore({
    reducer: {
        toggles,
        infoFields,
        contactFields,
        languageFields,
        experienceFields,
        educationFields,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
