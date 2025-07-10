import { Stack } from 'expo-router'

export default function HomeLayout(){


    return (
        <Stack>
        <Stack.Screen
        name='index'
        options={{
            headerShown:false
        }}/>
        <Stack.Screen
        name='[movie]'
        options={{
            // headerTransparent:true,
            // headerTintColor:'white',
            // title:"",
            // // headerRight:() => <HeatButton/>,
            // // headerLeft: () => <BackButton/>
            // headerLeft:()=>null,
            // headerBackVisible: false
            headerShown:false
        }}/>
    </Stack>
    )
    
}


