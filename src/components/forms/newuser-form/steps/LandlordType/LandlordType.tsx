import React, { useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
import './LandlordType.css';
import {
  Container,
  Heading,
  Image,
  Button,
  Flex,
  Spacer,
  Stack,
} from '@chakra-ui/react';
const LandlordType = (props: any) => {
  const { setLandlordType, next } = props;

  return (
    <Container
      fontSize={['sm', 'md', 'lg', 'xl']}
      ww='100ch'
      bg='white'
      mw={['0vh', '50vw']}
      my={['35vh']}
      centerContent
    >
      <Heading>What property type are you looking for?</Heading>
      <Stack className='button-stack'>
        <Button>Property Management Company</Button>
        <Button>X</Button>
        <Button>X</Button>
        <Button>X</Button>
        {/* </Stack> */}
        <Spacer></Spacer>
        <Button onClick={next}>Next</Button>
      </Stack>
    </Container>
  );
};
export default LandlordType;
