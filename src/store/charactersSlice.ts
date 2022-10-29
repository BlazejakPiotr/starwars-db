import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../interfaces/Character";
import axios from "axios";

export interface CharacterState {
  data: Character[];
  favorite: Character[];
  loading: boolean;
  errors: any;
}

const initialState: CharacterState = {
  data: [],
  favorite: [],
  loading: false,
  errors: null,
};

export const getCharacters = createAsyncThunk<Character[]>(
  "characters/getCharacters",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://swapi.dev/api/people/");
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getCharacters.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

export default characterSlice.reducer;
export const { setCharacters } = characterSlice.actions;
