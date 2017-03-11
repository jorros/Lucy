'use strict';

import React, {Component} from 'react';
import {TabBarIOS, NavigatorIOS} from 'react-native';
import {VpnRoute} from '../../routes/VpnRoute';
import {SettingsRoute} from '../../routes/SettingsRoute'
import styles from './styles';

class DefaultLayout extends Component {
    state = {
        selectedTab: 'VPN'
    };

    switch(index) {
        this.setState({ selectedTab: index });
    }

    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title="VPN"
                    selected={this.state.selectedTab === 'VPN'}
                    onPress={this.switch.bind(this, 'VPN')}>
                    <NavigatorIOS
                        style={styles.nav}
                        initialRoute={{
                            title : 'Lucy',
                            component: VpnRoute
                           }}
                    />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Settings"
                    selected={this.state.selectedTab === 'Settings'}
                    onPress={this.switch.bind(this, 'Settings')}>
                    <NavigatorIOS
                        style={styles.nav}
                        initialRoute={{
                            title : 'Lucy',
                            component: SettingsRoute
                           }}
                    />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

export default DefaultLayout;
