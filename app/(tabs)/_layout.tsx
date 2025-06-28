import { Tabs } from 'expo-router';
import { useSelector } from 'react-redux';
import CustomLabel from '../../components/CustomLabel';

export default function TabsLayout(){
    const {  colors } = useSelector((state:any )=> state.theme)
    return(
        <Tabs 
            screenOptions={{
                headerShown:false,
                tabBarActiveBackgroundColor: colors.title,
                tabBarInactiveBackgroundColor: colors.background,
                tabBarStyle: {
                    borderTopWidth: 1,
                    borderTopColor: colors.border
                },
                
            }}>
            <Tabs.Screen 
            name="Home"
            options={{

                tabBarLabel:({ focused })=><CustomLabel 
                label="Home" 
                focused={focused}
                inactiveLabel={colors.textSecondary}/>,

                tabBarIcon:() => null,
                tabBarItemStyle:{
                    borderRightWidth:1,
                    borderColor: colors.border,
                }
            }}
            />
            <Tabs.Screen 
            name="Search"
            options={{

                tabBarLabel:({ focused })=><CustomLabel 
                label="Search" 
                focused={focused}
                inactiveLabel={colors.textSecondary}
                />,
                
                tabBarIcon:() => null
            }}
            />
        </Tabs>
    )
}