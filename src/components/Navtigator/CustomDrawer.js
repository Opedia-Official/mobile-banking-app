import {
    DrawerContentScrollView,
    DrawerItem,
    // DrawerItemList,
} from '@react-navigation/drawer';

function CustomDrawer(props) {
    const { navigation } = props;
    return (
        <DrawerContentScrollView {...props}>
            {/* <DrawerItemList {...props} /> */}
            <DrawerItem
                label="Home"
                onPress={()=>navigation.navigate("Home")}
            />
            <DrawerItem
                label="Balance"
                onPress={()=>navigation.navigate("Balance")}
            />
            <DrawerItem
                label="E-Wallet"
                onPress={()=>navigation.navigate("EwalletScreen")}
            />
        </DrawerContentScrollView>
    );
}

export default CustomDrawer;