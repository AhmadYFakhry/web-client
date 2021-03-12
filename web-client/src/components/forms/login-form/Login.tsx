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
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

interface LoginFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormInput>();

  const onSubmit = (data: LoginFormInput) => {
    console.log(data);
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
          <Stack spacing='3'>
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
