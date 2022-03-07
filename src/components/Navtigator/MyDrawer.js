import { createDrawerNavigator } from '@react-navigation/drawer';
import BalanceScreen from '../../screen/BalanceScreen';
import BillScreen from '../../screen/BillScreen';
import EwalletScreen from '../../screen/EwalletScreen';
import Home from '../../screen/Home';
import HistoryTransScreen from '../../screen/TabScreen/HistoryTransScreen';
import CustomDrawer from './CustomDrawer';
const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
            <Drawer.Navigator 
                screenOptions={{headerShown:false,
                drawerStyle: {
                backgroundColor: 'white',
                width: 230,
                height: 720,
                marginVertical: 25,
                borderRadius:8
                },
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