'use strict';
import React, {Component} from 'react';
import {
    View,
    Platform
} from 'react-native';

import StatusBarSizeIOS from 'react-native-status-bar-size';

class StatusBarPaddingIOS extends Component {
    constructor(props) {
        super(props);
        this.state = { height: 0 };
    }

    componentWillMount() {
        this._renderStatusBar();
    }

    _renderStatusBar = () => {
        if (Platform.OS == 'ios')
            this.setState({
                height: StatusBarSizeIOS.currentHeight
            });
    };

    render() {
        return (
            <View style={{height: this.state.height}}/>
        )
    }
}

export default StatusBarPaddingIOS;