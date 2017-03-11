import React, {Component} from 'react';
import {View, Text, StatusBar, Modal, NavigatorIOS} from 'react-native';
import styles from './styles';
import Flag from 'react-native-flags';
import Button from 'react-native-button';
import LocationPicker from './locationPicker';

class VpnRoute extends Component {
    state = {
        selectLocationVisible: false
    };

    pressConnect() {

    }

    pressLocation() {
        this.setState({selectLocationVisible: true});
    }

    closeLocation() {
        this.setState({selectLocationVisible: false});
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    networkActivityIndicatorVisible={true}
                />
                <View style={styles.current_location}>
                    <Text>Current location:</Text>
                    <Flag code="GB" type="shiny"/>
                    <Text style={styles.country_name}>United Kingdom</Text>
                </View>
                <View style={styles.actions}>
                    <Button style={styles.connectButton} containerStyle={styles.connectButtonContainer}
                            onPress={this.pressConnect.bind(this)}>Connect</Button>
                    <Button style={styles.locationButton} containerStyle={styles.locationButtonContainer}
                            onPress={this.pressLocation.bind(this)}>
                        <View style={styles.locationContent}><Flag code="GB" type="shiny" size={24}
                                                                   style={styles.locationFlag}/><Text
                            style={styles.locationButton}>United Kingdom</Text></View>
                    </Button>
                </View>

                <Modal animationType={"slide"}
                       transparent={false}
                       visible={this.state.selectLocationVisible}>
                    <NavigatorIOS
                        style={styles.nav}
                        initialRoute={{
                            component: LocationPicker,
                            title: '',
                            rightButtonTitle: 'Close',
                            onRightButtonDown: () => this.closeLocation()
                           }}
                    />
                </Modal>
            </View>);
    }
}

export default VpnRoute;
