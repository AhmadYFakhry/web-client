import React, { useEffect, useState } from 'react';
// import './Registration.css';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { Step, Steps } from 'react-step-builder';
// import { EmailStep, PassStep, NameStep, UniStep } from './steps/index';
import {
  UploadProfilePicture,
  PropertyType,
  LandlordType,
} from './steps/index';

const backendURL = 'https://testing-environment-300301.firebaseapp.com/';

const NewUserForm = (props: any) => {
  // const { register, handleSubmit } = useForm<RegistrationFormInput>();
  //   return <Steps></Steps>;
  return (
    <Steps>
      <Step component={PropertyType} />
      <Step component={UploadProfilePicture} />
      <Step component={LandlordType} />
    </Steps>
  );
};

export default NewUserForm;
