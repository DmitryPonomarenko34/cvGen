// Types
import * as types from './types';

export const contactFieldCreatorAction: types.BaseContact = (state, action) => state.map(
    (contact) => {
        if (contact.id === action.payload.value.id) {
            return {
                ...contact,
                [ action.payload.type ]: action.payload.value.url,
            };
        }

        return contact;
    },
);

export const removeContactField: types.BaseContact<string> = (state, action) => state.filter(
    (contact) => contact.id !== action.payload,
);
