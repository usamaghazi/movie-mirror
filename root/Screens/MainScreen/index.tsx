
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../../components/Header';
import { Item, RootContainer, SafeArea } from './styles';


const MainScreen = () => {

  const { colors } = useSelector((state:any) => state.theme)
  
  return (
    <SafeArea background={colors.background}>

    <Header/>
    
      <RootContainer
      background={colors.background}>
        <Item
        textColor={colors.text}
        >Hello</Item>
      </RootContainer>

    </SafeArea>
  )
}

export default MainScreen


