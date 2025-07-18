

import { useRouter } from 'expo-router';
import React from 'react';
import { Appbar, Switch } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import { fontStyles } from '../../constants/Fonts';
import type { RootState } from '../../store';
import { toggleTheme } from '../../store/slices/themeSlice';
import { Favourite, ModeText, ModeWrapper } from './styles';

const Header: React.FC = () => {

      const dispatch = useDispatch()
      const { colors, isDark } = useSelector((state:RootState) => state.theme)

      const router = useRouter()
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
              fontWeight:'900',
              fontFamily:fontStyles.pacifico}}/>

              <Favourite onPress={()=>{router.push('/(stack)/favourite')}}>
              <Ionicons 
              name="heart-outline"
              size={24}
              color={colors.text}
              />
              </Favourite>

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