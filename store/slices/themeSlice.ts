import { createSlice } from '@reduxjs/toolkit';
import { darkTheme, lightTheme } from '../../constants/Colors';

const initialState = {
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