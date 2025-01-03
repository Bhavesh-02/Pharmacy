import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBrands = createAsyncThunk('brands/fetchBrands', async () => {
  const response = await axios.get('http://192.168.0.118:5500/api/brands');
  return response.data.data;
});

const brandsSlice = createSlice({
  name: 'brands',
  initialState: {
    brands: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.loading = false;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default brandsSlice.reducer;
