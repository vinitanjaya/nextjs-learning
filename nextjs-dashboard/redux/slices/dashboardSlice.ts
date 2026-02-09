import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CardSummary {
  numberOfCustomers: number;
  numberOfInvoices: number;
  totalPaidInvoices: string;
  totalPendingInvoices: string;
}

export interface DashboardState {
  cards: CardSummary | null;
}

const initialState: DashboardState = {
  cards: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setCardData(state, action: PayloadAction<CardSummary>) {
      state.cards = action.payload;
    },
    clearDashboard(state) {
      state.cards = null;
    },
  },
});

export const { setCardData, clearDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;
