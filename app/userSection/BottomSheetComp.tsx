import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const BottomSheetSettings = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['20%', '50%', '75%'], []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const openBottomSheet = () => {
        bottomSheetRef.current?.expand();
    };

    // Function to close the bottom sheet
    const closeBottomSheet = () => {
        bottomSheetRef.current?.collapse();
    };


    return (
        <View style={styles.container}>
            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <Button onPress={openBottomSheet} title='Open bottom sheet'/>
                <Button onPress={closeBottomSheet} title='Close bottom sheet'/>
                <View style={styles.contentContainer}>
                    <Text>Awesome 🎉</Text>
                </View>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height:300,
        padding: 24,
        backgroundColor: 'grey',
        
    },
    contentContainer: {
        position:'absolute',        
        flex: 1,
        alignItems: 'center',
    },
});

export default BottomSheetSettings;
