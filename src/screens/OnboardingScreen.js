import React, { useContext, useState } from 'react';
import { Title } from 'react-native-paper'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { IconButton } from 'react-native-paper'

// Project modules
import { APP_NAME } from '../constants'
import FormButton from  '../components/FormButton'
import { AuthContext } from '../navigation/AuthProvider'
import DatePicker from '../components/DatePicker'
import FormInput from '../components/FormInput';
import DiaLog from '../components/DiaLog'

// Import constant
import ContentFactory from '../constants/content'
import {ONBOARDING_STEPS} from '../constants'



class OnboardingScreen extends React.Component {

  state = {
    step: 0,
    step_name: ONBOARDING_STEPS[0],
    user: this.props.user
  }

  content = ContentFactory('onBoarding', 'vi')


  factory = infoType => {
      console.log(infoType)
      switch(infoType) {
        case 'name':
          return (
            <View>
               <Title>{this.content.askName}</Title>
               <FormInput
                  value={this.state.user.name}
                  placeholder={this.content.askNameForm}
               />
            </View>
          )
        case 'dob':
          return (
            <View>
              <DatePicker
                title={this.content.askDOB}
              />
          </View>
        )
        case 'gender':
          return (
            <View>
               <Title>{this.content.askGender}</Title>
               <FormInput
                  value={this.state.user.name}
                  placeholder={this.content.askNameForm}
               />
            </View>
          )
        case 'expected_partner_geneder':
          return (
            <View>
               <Title>{this.content.askExpectedPartner}</Title>
               <FormInput
                  value={this.state.user.name}
                  placeholder={this.content.askNameForm}
               />
            </View>
          )
        case 'relationship_style':
          return (
            <View>
                <Title>{this.content.askRelationshipStyle}</Title>
                <FormInput
                  value={this.state.user.name}
                  placeholder={this.content.askNameForm}
                />
            </View>
          )
        case 'location':
          return (
            <View>
                <DiaLog
                  dialogContent={this.content.askLocation}
                />
            </View>
          )

        default:
          return null;
      }
  }

  handleStep = () => {
      
      const next_step =  this.state.step + 1

      if (next_step === ONBOARDING_STEPS.length) console.log('Done')

      this.setState({
        step: next_step,
        step_name: ONBOARDING_STEPS[next_step]
      })
      console.log(this.state)
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.factory(this.state.step_name)}
        
        <IconButton
            icon="arrow-right-bold-outline"
            size={30}
            color="#5b3a70"
            onPress={this.handleStep}
      />
      </View>
    )
  }
 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default OnboardingScreen;
