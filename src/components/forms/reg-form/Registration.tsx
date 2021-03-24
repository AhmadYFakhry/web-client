import React, { useEffect, useState } from 'react';
import './Registration.css';
import {
  Heading,
  Container,
  Box,
  Stack,
  Input,
  Button,
  Text,
  useToast,
  Flex,
  Spacer,
  Select,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Step, Steps } from 'react-step-builder';
import { EmailStep, PassStep, NameStep } from './reg-steps/index';
interface RegistrationFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  type: string;
}

const backendURL = 'https://testing-environment-300301.firebaseapp.com/';

const Register = () => {
  // const { register, handleSubmit } = useForm<RegistrationFormInput>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toast = useToast();
  const toastIdRef: any = React.useRef();

  const onSubmit = async (data: any) => {
    const newUser = { ...data, name: `${data.firstName}, ${data.lastName}` };
    try {
      console.log(newUser);
      successToast();
    } catch (error) {
      failedToast();
    }
  };

  const successToast = () => {
    toastIdRef.current = toast({
      title: 'Ypi',
      description: "You'll be redirected momentarily",
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

  // const test = () => {
  //   console.log(data);
  // };

  return (
    <Steps>
      <Step
        title='My First Step'
        component={NameStep}
        setFirstName={setFirstName}
        setLastName={setLastName}
      />
      <Step title='My First Step' component={EmailStep} setEmail={setEmail} />
      <Step
        firstname={firstName}
        component={PassStep}
        setPassword={setPassword}
      />
      {/* <Step title='My Second Step' component={PassStep} /> */}
      {/* <Step title='My Second Step' component={PassStep} /> */}
    </Steps>
  );
};

export default Register;
