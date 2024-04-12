import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IDocument {
  id: number;
  name: string;
  type: string;
}

interface IDocumentsState {
  documents: IDocument[];
}

const initialState: IDocumentsState = {
  documents: [
    {id: 1, name: "Документ 1", type: "Указ"},
    {id: 2, name: "Документ 2", type: "Приказ"},
    {id: 3, name: "Документ 3", type: "Справка"},
    {id: 4, name: "Документ 4", type: "Повестка"},
    {id: 5, name: "Документ 5", type: "Договор"},
    {id: 6, name: "Документ 6", type: "Патент"},
  ],
};

export const documentsSlice = createSlice({
  name: "documents",
  initialState: initialState,
  reducers: {
    addDocuments: (state, action: PayloadAction<IDocument[]>) => {
      state.documents = action.payload;
    },
  },
});

export default documentsSlice.reducer;

export const { addDocuments } = documentsSlice.actions;
