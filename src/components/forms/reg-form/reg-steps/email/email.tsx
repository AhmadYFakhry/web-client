import React, { useCallback } from 'react';
import {
  Heading,
  Container,
  Stack,
  Input,
  Button,
  Flex,
} from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/react';
const EmailStep = (props: any) => {
  const { firstname, setEmail, email, next, prev } = props;

  const checkValid = () => {
    const re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return re.test(email);
  };

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
              value={email}
            />
          </Flex>
          <Button disabled={!checkValid()} onClick={next}>
            Next
          </Button>
          <Button onClick={prev}>Previous</Button>
        </Stack>
      </Container>
    </div>
  );
};
export default EmailStep;
