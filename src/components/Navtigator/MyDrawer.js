import { createDrawerNavigator } from '@react-navigation/drawer';
import BalanceScreen from '../../screen/BalanceScreen';
import BillScreen from '../../screen/BillScreen';
import { useWindowDimensions } from 'react-native';
import EwalletScreen from '../../screen/EwalletScreen';
import Home from '../../screen/Home';
import HistoryTransScreen from '../../screen/TabScreen/HistoryTransScreen';
import CustomDrawer from './CustomDrawer';
const Drawer = createDrawerNavigator();

function MyDrawer() {
    const dimensions = useWindowDimensions();
    return (
            <Drawer.Navigator 
                screenOptions={{headerShown:false,
                drawerStyle: {
                backgroundColor: 'white',
                width: 250,
                height: 720,
                marginTop:27,
                marginStart: 20,
                marginEnd:20,
                borderRadius:8
                },
                drawerType: dimensions.width >= 768 ? 'permanent' : 'front'
            }}
                initialRouteName="Home"
                drawerContent={(props) => <CustomDrawer {...props} />}

                >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Balance" component={BalanceScreen} />
                <Drawer.Screen name="EwalletScreen" component={EwalletScreen} />
                <Drawer.Screen name="BillScreen" component={BillScreen} />
                <Drawer.Screen name="HistoryTransScreen" component={HistoryTransScreen} />
            </Drawer.Navigator>
    );
}
export default MyDrawer;