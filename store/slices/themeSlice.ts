import { createSlice } from '@reduxjs/toolkit';
import { darkTheme, lightTheme } from '../../constants/Colors';
import { ThemeState } from '../../types/themeTypes';

const initialState: ThemeState = {
    isDark : false,
    colors: lightTheme
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleTheme: (state) => {
      state.isDark = !state.isDark;
      state.colors = state.isDark ? darkTheme : lightTheme;
    }
    }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer