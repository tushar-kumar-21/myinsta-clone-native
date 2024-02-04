import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const BottomSheetSettings = () => {
    const snapPoints = useMemo(() => ['25%', '50%', '75%', '100%'], []);

    return (
        <View style={styles.container}>
            <BottomSheet snapPoints={snapPoints}>
                <View style={styles.contentContainer}>
                    <Text>
                        {/* Your long text content goes here */}
                        {/* For demonstration, I'm adding a placeholder text */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </View>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
    },
});

export default BottomSheetSettings;
