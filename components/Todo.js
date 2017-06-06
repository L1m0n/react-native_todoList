import React, {Component} from 'react';
import { Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            value: 1
        }
    }
    clickHandler() {
        this.props.remove(this.props.todo.id);
    }
    toggle(){
        this.props.toggle(this.props.todo.id);
        console.log(this.props.state);
    }

    render(){
        return(
            <View style={styles.wrapper}>
                <Text onPress={()=> this.toggle()} style={this.props.todo.completed ? styles.textThrough : styles.text}>{this.props.todo.text}</Text>
                <TouchableHighlight style={styles.remove} underlayColor="transparent" onPress={this.clickHandler}>
                    <Icon name="close" size={30} backgroundColor="#3b5998" />
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: '#e3e3e3',
        height: 50,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    remove: {

    },
    text: {
        fontFamily: 'Arial',
        fontSize: 30
    },
    textThrough: {
        fontFamily: 'Arial',
        fontSize: 30,
        textDecorationLine: 'line-through'
    }
});

export default Todo;