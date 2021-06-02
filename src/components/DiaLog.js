

// React Native Date Picker – To Pick the Date using Native Calendar
// https://aboutreact.com/react-native-datepicker/

// import React in our code
import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';

const DiaLogCustom = props => {

  return (
    <View style={styles.container}>
      <Dialog
        visible={true}
        footer={
          <DialogFooter>
            <DialogButton
              text="CANCEL"
              onPress={() => {}}
            />
            <DialogButton
              text="OK"
              onPress={() => {}}
            />
          </DialogFooter>
        }
      >
        <DialogContent style={styles.title}>
          {props.dialogContent}
        </DialogContent>
      </Dialog>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});

export default DiaLogCustom;