import React from 'react';
import { Dimensions, View, Image } from 'react-native';

const { width } = Dimensions.get('window');

const Piece = (props) => {
    const { position, icon } = props
    return (
        <View style={{
            position:'absolute', 
            alignSelf: 'center'
        }}>
            <Image source={icon} key={position} style={{width: 40, height: 40}}/>
        </View>
    );
}

export default Piece;