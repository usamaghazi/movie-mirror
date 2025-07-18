import styled from 'styled-components/native';

interface ModeTextProps {
      textColor?: string
}

export const ModeWrapper = styled.View({
      marginRight: 13, 
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 8
})

export const ModeText = styled.Text<ModeTextProps>(props =>({
    fontSize:14,
    fontWeight:'bold',
    
    ...(props.textColor && {
      color: props.textColor
    })
}))

export const Favourite = styled.TouchableOpacity({
      alignItems:'center',
      justifyContent:'center',
      paddingTop:5,
      marginRight:10
})

