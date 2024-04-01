import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Airplane {
  id: string;
  airplaneName: string;
  capacity: number;
}

interface IFlight {
  id: string;
  startDate: string;
  endDate: string;
  startCity: string;
  endCity: string;
  airplaneId: string;
  airplane: Airplane;
}

interface IFlightsState {
  flights: IFlight[];
}

const initialState: IFlightsState = {
  flights: [],
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
