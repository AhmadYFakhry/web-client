import React, { useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
import './Landing.css';
import {
  Container,
  Heading,
  Image,
  Button,
  Flex,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
const LandlordType = (props: any) => {
  const { next, firstName } = props;

  return (
    <Container
      fontSize={['sm', 'md', 'lg', 'xl']}
      ww='100ch'
      //   bg='white'
      mw={['0vh', '50vw']}
      my={['35vh']}
      centerContent
      textAlign='center'
    >
      <Heading className='title'>Nice meeting you, {firstName}</Heading>
      <Text>
        Let's learn a bit more about you so we can find your perfect service for
        you
      </Text>
      <Stack className='button-stack'>
        <Button onClick={next}>I'm Ready</Button>
      </Stack>
    </Container>
  );
};
export default LandlordType;
