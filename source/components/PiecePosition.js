import React from 'react';
import { Dimensions, View, Text } from 'react-native';
import {
    POSITION,
    PADDING
} from '../utils/Constants';
const { width } = Dimensions.get('window');

const PiecePosition = (props) => {
    const { position, labels } = props
    const gridSize = (width - PADDING * 2) / 8

    let flexDirection = 'row';
    let height = gridSize;
    let gridWidth = PADDING;

    switch (position) {
        case POSITION.LEFT:
            flexDirection = 'column';
            height = gridSize;
            gridWidth = PADDING;
            break;
        case POSITION.TOP:
            flexDirection = 'row';
            height = PADDING;
            gridWidth = gridSize;
            break;
        case POSITION.RIGHT:
            flexDirection = 'column';
            height = gridSize;
            gridWidth = PADDING;
            break;
        case POSITION.BOTTOM:
            flexDirection = 'row';
            height = PADDING;
            gridWidth = gridSize;
            break;
    }

    return (
        <View style={{            
            flexDirection: flexDirection,
            backgroundColor: 'black',                  
        }}>
            {labels.map(label => {
                return <Text style={{
                    fontWeight: '500',  
                    color: 'white',
                    height: height,
                    width: gridWidth,
                    textAlign: 'center',
                    backgroundColor: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
                }}>{label}</Text>
            })}
        </View>
    );
}

export default PiecePosition;