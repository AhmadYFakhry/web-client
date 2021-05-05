import React from 'react';
// import './App.css';
import { Flex, Spacer, Center, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Image, Link } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import './nav-bar.css';
import firebase from '../../firebase';

const Navbar = () => {
  const [signedIn, setSignedIn] = React.useState(false);
  const [user, setUser] = React.useState<firebase.User | null>(null);

  React.useEffect(() => {
    setUser(firebase.auth().currentUser)
  }, [])

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setSignedIn(true)
    } else {
      setSignedIn(false)
    }
    });

    const signOut = () => {
      firebase.auth().signOut();
    }


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
        <Link href="/" fontWeight='semibold' color='white' p='4'>
          HOME
        </Link>
        <Link href="/product" fontWeight='semibold' color='white' p='4'>
          WHAT WE DO
        </Link>
        <Link href="/faq" fontWeight='semibold' color='white' p='4'>
          FAQ
        </Link>
        <Link href="/team" fontWeight='semibold' color='white' p='4'>
          THE TEAM
        </Link>
        {signedIn ? <Menu>
          <MenuButton fontWeight="semibold" backgroundColor="#F6CC50" as={Button} rightIcon={<ChevronDownIcon />}>
            PROFILE
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link href={`/profile`}>
                View Profile
              </Link>
            </MenuItem>
            <MenuItem>
              <Link onClick={signOut}>
                Sign out
              </Link>
            </MenuItem>
          </MenuList>
        </Menu> :
        <Link color="white" fontWeight="semibold" href="/login">
          SIGN IN
        </Link>}
      </Center>
    </Flex>
  );
};

export default Navbar;
