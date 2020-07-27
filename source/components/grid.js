import React  from 'react';
import { View, Dimensions } from 'react-native';
import Piece from '../components/piece';
import {
    NUMBER_OF_ROWS,
    PADDING
} from '../utils/Constants';

const { width } = Dimensions.get('window');
const Grid = (props) => {  
        const { position, piece } = props
        const gridSize = (width - PADDING*2) / NUMBER_OF_ROWS

        const isWhite = Math.floor(position / 8) + position % 8;
        let color = 'gray'
        if ( isWhite % 2 == 0) {
            color = 'white'
        } 

        return (
            <View>
                <View key={position} style={{backgroundColor: color, width: gridSize, height: gridSize}}/>
                {piece && <Piece icon={piece}/>}
            </View>
        );
}

export default Grid;
