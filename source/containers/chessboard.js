import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { allPieces } from '../utils/Pieces';
import PiecePosition from '../components/PiecePosition';
import Grid from '../components/grid';
import {
    HORIZONTAL_ROWS, POSITION, VERTICAL_ROWS
} from '../utils/Constants';

export default class Chessboard extends Component {
    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    resetGame = () => {

    }

    selectRandomMove = () => {

    }

    renderSquares() {
        const allSquares = []
        allPieces.map((piece, index) => {
            allSquares.push(<Grid position={index} piece={piece} />)
        })
        return allSquares
    }

    playActions() {
        return (
            <View style={styles.playActionContainer}>
                <TouchableOpacity style={styles.buttonStyle} onPress={this.resetGame}>
                    <Text>Reset</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} onPress={this.selectRandomMove}>
                    <Text>Random</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <PiecePosition position={POSITION.TOP} labels={HORIZONTAL_ROWS} />
                <View style={styles.subContainer}>
                    <PiecePosition position={POSITION.LEFT} labels={VERTICAL_ROWS} />
                    <View style={styles.board}>
                        {this.renderSquares()}
                    </View>
                    <PiecePosition position={POSITION.RIGHT} labels={VERTICAL_ROWS} />
                </View>
                <PiecePosition position={POSITION.BOTTOM} labels={HORIZONTAL_ROWS} />
                {this.playActions()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    subContainer: {
        flexDirection: 'row'
    },
    board: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    playActionContainer: {
        width: '100%',
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonStyle: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: 80,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
