import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';
import {addTodo} from '../actions';
import {connect} from 'react-redux';

class presenter extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        this.props.onSubmit(e.nativeEvent.text);
        this._textInput.setNativeProps({text: ''});
    }

    render() {
        return (
            <View>
                <TextInput
                    ref={component => this._textInput = component}
                    onSubmitEditing={e => this.handleSubmit(e)}
                    placeholder='Type here to add todo'
                />
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (text) => {
            dispatch(addTodo(text));
        }
    }
};

const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);

export default AddTodo;