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
  const { next, setFirstName, prev, setLastName } = props;

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

  const onPressEnter = useCallback(
    (event) => {
      // console.log(event);
      if (event.key === 'Enter') next();
    },
    [next]
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
              onChange={setFirst}
              autoFocus
            />
            <Input
              type='text'
              name='name'
              placeholder='Last Name'
              onChange={setLast}
              onKeyPress={onPressEnter}
            />
          </Flex>
          <Button disabled onClick={next}>
            Next
          </Button>
          <Button onClick={prev}>Previous</Button>
        </Stack>
      </Container>
    </div>
  );
};
export default NameStep;
