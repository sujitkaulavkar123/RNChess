import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PiecePosition from '../components/PiecePosition';
import Grid from '../components/grid';
import {
    HORIZONTAL_ROWS, POSITION, VERTICAL_ROWS
} from '../utils/Constants';
import {
    resetBoardAction,
    randomSelectionAction
} from '../redux/boardReducer'

class Chessboard extends Component {
    resetGame = () => {
        this.props.resetBoard()
    }

    selectRandomMove = () => {
        this.props.selectRandomMove()
    }

    renderSquares() {
        const allSquares = []
        this.props.piecePositions.map((piece, index) => {
            allSquares.push(<Grid position={index} piece={piece} />)
        })
        return allSquares
    }

    playActions() {
        return (
            <View style={styles.playActionContainer}>
                <TouchableOpacity
                    disabled={this.props.disableResetButton}
                    style={styles.buttonStyle}
                    onPress={this.resetGame}>
                    <Text style={{
                        opacity: this.props.disableResetButton ? 0.3 : 1
                    }}>Reset</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this.selectRandomMove}>
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
        justifyContent: 'center'
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
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = state => {
    return {
        piecePositions: state.boardReducer.newMove,
        disableResetButton: state.boardReducer.disableResetButton,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        selectRandomMove() {
            dispatch(randomSelectionAction())
        },
        resetBoard() {
            dispatch(resetBoardAction())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chessboard);