import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      // state.items = action.payload;
      // state.items.push(action.payload);
      state = {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addContact(state, action) {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    removeContact(state, action) {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    },
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addContact,
  removeContact,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
