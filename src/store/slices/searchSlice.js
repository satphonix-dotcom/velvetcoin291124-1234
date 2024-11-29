import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  results: [],
  loading: false,
  error: null
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    searchStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    searchSuccess: (state, action) => {
      state.loading = false;
      state.results = action.payload;
    },
    searchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearSearch: (state) => {
      state.query = '';
      state.results = [];
      state.loading = false;
      state.error = null;
    }
  }
});

export const {
  setSearchQuery,
  searchStart,
  searchSuccess,
  searchFailure,
  clearSearch
} = searchSlice.actions;

export default searchSlice.reducer;