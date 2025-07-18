import { Stack } from 'expo-router'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

export default function StackLayout(){

    const { colors } = useSelector((state:RootState) => state.theme)

    return(
        <Stack>
            <Stack.Screen
            name='favourite'
            options={{
                title:'Favourite Movies',
                headerStyle:{
                    backgroundColor:colors.background
                },
                headerTitleStyle:{
                    fontWeight:'800',
                },
                headerTintColor:colors.text,
                headerShadowVisible:false
            }}/>
        </Stack>
    )
}