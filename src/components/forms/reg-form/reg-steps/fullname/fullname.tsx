import React, { useCallback } from 'react';
import {
  Heading,
  Container,
  Box,
  Stack,
  Input,
  Button,
  Text,
  // useToast,
  Flex,
} from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/react';
const NameStep = (props: any) => {
  const { next, setFirstName, setLastName } = props;

  const test = (data: any) => {
    console.log(data);
  };

  const setFirst = useCallback(
    (event) => {
      setFirstName(event.target.value);
    },
    [setFirstName]
  );

  const setLast = useCallback(
    (event) => {
      setLastName(event.target.value);
    },
    [setLastName]
  );

  return (
    <div>
      <Tooltip label='Cancel Registration and go home'>
        <CloseButton />
      </Tooltip>
      <Container
        fontSize={['sm', 'md', 'lg', 'xl']}
        ww='100ch'
        bg='white'
        mw={['0vh', '50vw']}
        // mh={['50vh']}
        my={['35vh']}
      >
        <Stack>
          <Heading>Let's start with your name</Heading>
          <Flex>
            <Input
              type='text'
              name='name'
              placeholder='First Name'
              // ref={dataRef}
              onChange={setFirst}
            />
            <Input
              type='text'
              name='name'
              placeholder='Last Name'
              onChange={setLast}
            />
          </Flex>
          <Button type='submit' onClick={next}>
            Next
          </Button>
        </Stack>
        {/* <h1>{title}</h1> */}
      </Container>
    </div>
  );
};
export default NameStep;
