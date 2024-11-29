import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const processPayment = createAsyncThunk(
  'payment/process',
  async ({ orderId, paymentDetails }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/payments/process',
        { orderId, paymentDetails },
        {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const checkPaymentStatus = createAsyncThunk(
  'payment/checkStatus',
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/payments/${orderId}/status`,
        {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    loading: false,
    error: null,
    transactionHash: null,
    status: null
  },
  reducers: {
    clearPaymentState: (state) => {
      state.loading = false;
      state.error = null;
      state.transactionHash = null;
      state.status = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(processPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(processPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.status;
        if (action.payload.transactionHash) {
          state.transactionHash = action.payload.transactionHash;
        }
      })
      .addCase(processPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Payment failed';
      })
      .addCase(checkPaymentStatus.fulfilled, (state, action) => {
        state.status = action.payload.status;
        if (action.payload.transactionHash) {
          state.transactionHash = action.payload.transactionHash;
        }
      });
  }
});

export const { clearPaymentState } = paymentSlice.actions;
export default paymentSlice.reducer;