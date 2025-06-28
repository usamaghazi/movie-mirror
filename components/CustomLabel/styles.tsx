import styled from 'styled-components/native'

interface TabTextProps {
    focused: boolean,
    inactiveLabel:string
}

export const TabTextContainer = styled.View({
    marginTop:-20,
})

export const TabText = styled.Text<TabTextProps>(props => ({
    fontSize: 16,
    fontWeight: 700,
    color:props.inactiveLabel,

    ...(props.focused && {
        color :'#FFFFFF'
    })
}))