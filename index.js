import React from 'react';
import {View, Platform} from 'react-native';
import StatusBarSizeIOS from 'react-native-status-bar-size';

export default () => <View style={{height: Platform.OS === 'ios' ? StatusBarSizeIOS.currentHeight : 0}}/>;