import React,{Component} from 'react';
import { Text } from 'react-native';


export default class LowerCase extends Component {
    render(){
        const { text } = this.props;
        
        return <Text>{text.toLowerCase()}</Text>
        
    }
}