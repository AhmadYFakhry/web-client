import React from 'react';
// import './App.css';
import { Flex, Spacer, Center, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Image, Link } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import './nav-bar.css';
const Navbar = () => {
  return (
    <Flex pos='fixed' w='100vw' h='84px'>
      <Center bg='#F6CC50' p='2'>
        <Image
          w='50ch'
          src='https://i.ibb.co/2Yb2Dgp/Lease-Genius-Logo-4.png'
        ></Image>
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
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Profile
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
          </MenuList>
        </Menu>
      </Center>
    </Flex>
  );
};

export default Navbar;
