// import { View, Text } from 'react-native'

import React from 'react';
import { Appbar, Switch } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { toggleTheme } from '../../store/slices/themeSlice';
import { ModeText, ModeWrapper } from './styles';

const Header: React.FC = () => {

      const dispatch = useDispatch();
      const { colors, isDark } = useSelector((state:any) => state.theme)
  return (
        <Appbar.Header
        style={{ 
        backgroundColor: colors.background,
        height: 56,
         borderBottomWidth: 1,
        borderBottomColor:colors.border
      }}>

             <Appbar.Content title="Movie Mirror" 
             titleStyle={{
              color:"#c60030",
              fontWeight:'900'}}/>

              <ModeWrapper>
                <ModeText
                textColor= {colors.text}>
                  Dark Mode
                </ModeText>
                <Switch
                 value={isDark}
                 onValueChange={() => { dispatch(toggleTheme()); }}
                 trackColor={{ false: '#ccc', true: '#03cf3b' }}
                 thumbColor={isDark ? '#f4f3f4' : '#7a7b7d'}
                />
             </ModeWrapper>

        </Appbar.Header>
  )
}

export default Header