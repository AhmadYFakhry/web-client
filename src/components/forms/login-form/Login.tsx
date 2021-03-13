import React from 'react';
import './Login.css';
import {
  Heading,
  Container,
  Box,
  Stack,
  Input,
  Button,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
interface LoginFormInput {
  email: string;
  password: string;
}

const backendURL = 'https://testing-environment-300301.firebaseapp.com/';

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormInput>();
  const toast = useToast();
  const toastIdRef: any = React.useRef();

  const onSubmit = async (data: LoginFormInput) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL || backendURL}/signin`
      );
      successToast();
    } catch (error) {
      failedToast();
    }
  };

  const successToast = () => {
    toastIdRef.current = toast({
      title: 'Logged In.',
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
    <div className='test'>
      <Container
        fontSize={['sm', 'md', 'lg', 'xl']}
        borderRadius='15px'
        w='100ch'
        p='5ch'
        bg='white'
        m={['0', '15ch']}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack fontSize={['sm', 'md', 'lg', 'xl']} spacing='3'>
            <Heading>We're Fixing the Student Housing Market</Heading>
            <Text fontSize='30px'>Login to access your account</Text>
            <Input
              ref={register}
              variant='filled'
              type='email'
              name='email'
              placeholder='Email'
            />
            <Input
              ref={register}
              variant='filled'
              type='password'
              name='password'
              placeholder='Password'
            />
            <Box py='3'>
              <Button type='submit' className='login-btn' mr='3'>
                Submit
              </Button>
              <Button className='login-btn'>Register</Button>
            </Box>
          </Stack>
        </form>
      </Container>
    </div>
  );
};

export default Login;
