import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../interfaces/Character";
import axios from "axios";

interface Data {
  count: number | null;
  results: Character[];
  next: string;
  previous: string | null;
}

interface CharacterState {
  data: Data;
  favorite: Character[];
  loading: boolean;
  errors: any;
}

const initialState: CharacterState = {
  data: {
    count: 0,
    next: "https://swapi.dev/api/people/",
    previous: "",
    results: [],
  },
  favorite: [],
  loading: false,
  errors: null,
};

export const getCharacters = createAsyncThunk<Data, string>(
  "characters/getCharacters",
  async (url, thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Data>) => {
      state.data = action.payload;
    },
    handleFavorite: (state, action: PayloadAction<Character>) => {
      const character = state.favorite.findIndex(
        (element) => element.url === action.payload.url
      );
      if (character > -1) {
        state.favorite.splice(character, 1);
      } else {
        state.favorite = [...state.favorite, action.payload];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      const { count, next, previous, results } = action.payload;
      state.data = {
        next: next,
        previous: previous,
        results: state.data.results.concat(results),
        count: count,
      };
      state.loading = false;
    });
    builder.addCase(getCharacters.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

export default characterSlice.reducer;
export const { setCharacters, handleFavorite } = characterSlice.actions;
