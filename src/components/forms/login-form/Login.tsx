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
  Link,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import firebase from '../../../firebase';
import Navbar from '../../nav-bar/nav-bar';

interface LoginFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormInput>();
  const toast = useToast();

  const onSubmit = async (data: LoginFormInput) => {

    try {
      await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      successToast()
    } catch (error) {
      failedToast(error);
    }
  };

  const successToast = () => {
   toast({
      title: 'Logged In.',
      description: "You'll be redirected momentarily",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  const failedToast = (error: any) => {
    toast({
      title: 'There was an error logging you in.',
      description: error,
      status: 'warning',
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
    <Navbar />
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
              <Button className='login-btn'>
                <Link href="/register">Register</Link>
              </Button>
            </Box>
          </Stack>
        </form>
      </Container>
    </div>

    </>
  );
};

export default Login;
