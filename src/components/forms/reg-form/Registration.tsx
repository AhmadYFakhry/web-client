import React, { useEffect, useState } from 'react';
import './Registration.css';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { Step, Steps } from 'react-step-builder';
import { EmailStep, PassStep, NameStep, UniStep } from './reg-steps/index';

const backendURL = 'https://testing-environment-300301.firebaseapp.com/';

const Register = () => {
  // const { register, handleSubmit } = useForm<RegistrationFormInput>();
  const [university, setUniversity] = useState('');
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
        title='My First Step'
        component={UniStep}
        setFirstName={setUniversity}
        setUniversity={setUniversity}
      />
      <Step
        title='My Second Step'
        component={NameStep}
        setFirstName={setFirstName}
        setLastName={setLastName}
      />
      <Step
        title='My Third Step'
        firstname={firstName}
        component={EmailStep}
        setEmail={setEmail}
      />
      <Step component={PassStep} setPassword={setPassword} submit={onSubmit} />
    </Steps>
  );
};

export default Register;
