import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native-web";
import BottomSheet from '../../screens/auth/SeConnecter'

function AlertBox() {
    return(
        <View>
            {/* alert box */}
            <View>
                <Text>Etes vous sur de continuer avec compte {authAccounts.accountName1}</Text>
                {/* The buttons container */}
                <View >
                    <TouchableOpacity>Annuler</TouchableOpacity>
                    <TouchableOpacity>Ok</TouchableOpacity>
                </View>
            </View>
        </View>
    )
}