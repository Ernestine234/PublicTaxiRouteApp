import {Icon} from '@rneui/themed'
import { Pressable, Text, View } from 'react-native';

// props for icon button
export interface IconButtonProp {
    iconName: string;
    title?: string;
    iconType: string;
    onPress: () => void;
    circle: boolean | false;
    backgroundColor?: string;
}

const IconButton = (props:IconButtonProp) => {

    // return circle icon if circle is true and title is empty
    if(props.circle && props.title == undefined){
        return (
            <Pressable
                onPress={props.onPress}
                className={props.backgroundColor}
            >
                <Icon
                    name={props.iconName}
                    type={props.iconType}
                    backgroundColor={props.backgroundColor}
                    iconStyle={{
                        color: 'white'
                    }}
                />
            </Pressable>
        )
    }

    return (
        <Pressable
            onPress={props.onPress}
        >
            <Icon
                name={props.iconName}
                type={props.iconType}
            />
            <Text>{props.title}</Text>
        </Pressable>
    );
}

export default IconButton;