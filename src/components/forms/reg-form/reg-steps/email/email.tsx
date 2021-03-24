import React from 'react';
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
  const { data, firstname, handleChange, next, prev, dataRef } = props;
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
          <Heading>Almost done! What's your email?</Heading>
          <Flex>
            <Input
              type='email'
              name='name'
              placeholder='Your Email'
              ref={dataRef}
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
