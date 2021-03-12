import React from 'react';
// import './App.css';
import { Flex, Spacer, Text, Heading, Button, Center } from '@chakra-ui/react';
import { Image, Link } from '@chakra-ui/react';
const Navbar = () => {
  //   <div></div>;
  return (
    <Flex h='6vh'>
      <Center bg='#F6CC50' p='2'>
        <Image src='./tlg-logo.png'></Image>
        <Heading>The Lease Genius</Heading>
      </Center>
      <Spacer bg='#3F3F3F' />
      <Center bg='#3F3F3F' p='2'>
        <Link fontWeight='semibold' color='white' p='4'>
          HOME
        </Link>
        <Link fontWeight='semibold' color='white' p='4'>
          FOR STUDENTS
        </Link>
        <Link fontWeight='semibold' color='white' p='4'>
          FOR LANDLORDS
        </Link>
        <Link fontWeight='semibold' color='white' p='4'>
          THE TEAM
        </Link>
        <Link fontWeight='semibold' color='white' p='4'>
          ACCOUNT
        </Link>
      </Center>
    </Flex>
  );
};

export default Navbar;
