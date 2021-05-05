import React, { useEffect, useState } from 'react';
import './Registration.css';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { Step, Steps } from 'react-step-builder';
import {
  EmailStep,
  PassStep,
  NameStep,
  UniStep,
  Loading,
} from './reg-steps/index';
import NewUserForm from '../newuser-form/newuser-form';
import firebase from '../../../firebase';

// // Initialize FireStore Database
var db = firebase.firestore();

const Register = () => {
  const [university, setUniversity] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toast = useToast();
  const toastIdRef: any = React.useRef();

  const onSubmit = async () => {
    console.log("TEST");
    const newUser = {
      university,
      email,
      password,
      name: `${firstName}, ${lastName}`,
    };
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
      const user = userCredential.user;
      //Inputting User Preferences and Types into the Database
      await db.collection('Users')
      .doc(user?.uid)
      .set({
        type: '',
      })
      await user?.updateProfile({
          displayName: newUser.name,
        })
      console.log('User Update Successful');
      successToast();
    } catch (error) {
      failedToast();
    }
  };

  const successToast = () => {
    toastIdRef.current = toast({
      title: "You're all good!",
      description: "You'll be redirected momentarily...",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  const failedToast = () => {
    toastIdRef.current = toast({
      title: 'There was an error logging you in.',
      description: 'Please double check your email and password',
      status: 'warning',
      duration: 9000,
      isClosable: true,
    });
  };

  useEffect(() => {
    console.log(firstName, lastName);
  }, [firstName, lastName]);

  return (
    <Steps>
      <Step
        university={university}
        title='My First Step'
        component={UniStep}
        setUniversity={setUniversity}
      />
      <Step
        firstNameLen={firstName.length}
        lastNameLen={lastName.length}
        firstName={firstName}
        lastName={lastName}
        title='My Second Step'
        component={NameStep}
        setFirstName={setFirstName}
        setLastName={setLastName}
      />
      <Step
        title='My Third Step'
        firstname={firstName}
        email={email}
        component={EmailStep}
        setEmail={setEmail}
      />
      {/* Loading Step */}
      <Step
        password={password}
        component={PassStep}
        setPassword={setPassword}
      />
      <Step beforeStepChange={onSubmit} component={Loading} />
      <Step firstName={firstName} component={NewUserForm} />
    </Steps>
  );
};

export default Register;
