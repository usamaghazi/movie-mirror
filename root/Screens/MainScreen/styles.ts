import styled from 'styled-components/native';

interface RootContainerProps {
  background?: string;
}
interface TextProps {
  textColor?: string
}



export const SafeArea = styled.SafeAreaView<RootContainerProps>(props => ({
        flex:1,
      ...(props.background && {
        backgroundColor: props.background
        })
}))

export const RootContainer = styled.View<RootContainerProps>(props => ({
    flex:1,
    alignItems:"center",
    justifyContent:'center',

    ...(props.background && {
        backgroundColor: props.background
    })
}))

export const Item = styled.Text<TextProps>(props => ({
      fontSize:24,
      fontWeight:'bold',

      ...(props.textColor && {
        color: props.textColor
      })
}))