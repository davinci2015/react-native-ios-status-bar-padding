import React from 'react';
import {View, Platform} from 'react-native';
import StatusBarSizeIOS from 'react-native-status-bar-size';

export default props => (
    Platform.OS === 'ios'
        ?  <View
            style={Object.assign({
                height: StatusBarSizeIOS.currentHeight
            }, props.style || {})}
        />
        : null
);
