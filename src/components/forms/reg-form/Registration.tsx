import React from 'react';
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
  const { register, handleSubmit } = useForm<RegistrationFormInput>();
  const toast = useToast();
  const toastIdRef: any = React.useRef();

  const onSubmit = async (data: RegistrationFormInput) => {
    const newUser = { ...data, name: `${data.firstName}, ${data.lastName}` };
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL || backendURL}/newuser`,
        newUser
      );
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

  return (
    <Steps>
      <Step title='My First Step' component={EmailStep} />
      <Step title='My Second Step' component={PassStep} />
      <Step title='My Third Step' component={NameStep} />
    </Steps>
    // <div className='reg-main'>
    //   <video autoPlay loop muted id='video'>
    //     <source
    //       src='https://www.pexels.com/video/3150402/download/?search_query=houses&tracking_id=er4ow2udilv'
    //       type='video/mp4'
    //     />
    //   </video>
    //   <Container
    //     fontSize={['sm', 'md', 'lg', 'xl']}
    //     borderRadius='15px'
    //     w='100ch'
    //     p='5ch'
    //     bg='white'
    //     m={['0', '15ch']}
    //   >
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <Stack fontSize={['sm', 'md', 'lg', 'xl']} spacing='3'>
    //         <Heading>We're Fixing the Student Housing Market</Heading>
    //         <Text fontSize='30px'>Create Your Account</Text>
    //         <Flex className='name-row'>
    //           <Input
    //             mr='2ch'
    //             ref={register}
    //             variant='filled'
    //             type='name'
    //             name='firstName'
    //             placeholder='First Name'
    //           />
    //           <Spacer />
    //           <Input
    //             ref={register}
    //             variant='filled'
    //             type='name'
    //             name='lastName'
    //             placeholder='Last Name'
    //           />
    //         </Flex>
    //         <Input
    //           ref={register}
    //           variant='filled'
    //           type='email'
    //           name='email'
    //           placeholder='Email'
    //         />
    //         <Input
    //           ref={register}
    //           variant='filled'
    //           type='password'
    //           name='password'
    //           placeholder='Password'
    //         />
    //         <Select variant='filled' placeholder='Select option'>
    //           <option value='option1'>Tenant</option>
    //           <option value='option2'>Landlord</option>
    //         </Select>
    //         <Box py='3'>
    //           <Button type='submit' className='login-btn' mr='3'>
    //             Register
    //           </Button>
    //         </Box>
    //       </Stack>
    //     </form>
    //   </Container>
    // </div>
  );
};

export default Register;
