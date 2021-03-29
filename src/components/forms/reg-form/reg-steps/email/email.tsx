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
const EmailStep = (props: any) => {
  const { firstname, setEmail, next, prev } = props;

  const onPressEnter = useCallback((event) => {
    // console.log(event);
    if (event.key === 'Enter') next();
  }, []);

  const setUserEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
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
        my={['35vh']}
      >
        <Stack>
          <Heading>Alright {firstname}, what's your email?</Heading>
          <Flex>
            <Input
              type='email'
              name='name'
              placeholder='Your Email'
              onChange={setUserEmail}
              onKeyPress={onPressEnter}
              autoFocus
            />
          </Flex>
          <Button onClick={next}>Next</Button>
          <Button onClick={prev}>Previous</Button>
        </Stack>
      </Container>
    </div>
  );
};
export default EmailStep;
