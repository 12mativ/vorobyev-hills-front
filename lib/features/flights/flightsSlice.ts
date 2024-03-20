import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFlight {
  id: number;
  airplaneName: string;
  startDate: string;
  endDate: string;
  startCity: string;
  endCity: string;
}

interface IFlightsState {
  flights: IFlight[];
}

const initialState: IFlightsState = {
  flights: []
};

export const flightsSlice = createSlice({
  name: "flights",
  initialState: initialState,
  reducers: {
    addFlights: (state, action: PayloadAction<IFlight[]>) => {
      state.flights = action.payload;
    },
  },
});

export default flightsSlice.reducer;

export const { addFlights } = flightsSlice.actions;
