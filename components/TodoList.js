import React, {Component} from 'react';
import {ListView, Text, View} from 'react-native';
import Todo from './Todo';

class TodoList extends Component{
    constructor(props){
        super(props);
    }

    render() {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let dataSource = ds.cloneWithRows(this.props.todos);

        return (
            <ListView
                style={{flex: 1}}
                dataSource={dataSource}
                renderRow={rowData =><Todo state={this.props.todos} toggle={this.props.toggle} remove={this.props.remove} todo={rowData} />} />
            )
    }

}

export default TodoList;
