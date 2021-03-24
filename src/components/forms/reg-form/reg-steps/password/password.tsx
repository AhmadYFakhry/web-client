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
const PassStep = (props: any) => {
  const { handleSubmit, title, next, prev, dataRef } = props;

  const test = (data: any) => {
    // submit();
    console.log(data);
    next();
  };

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
          <Heading>Always use protection. Enter a password </Heading>
          <Flex>
            <Input
              type='password'
              name='password'
              placeholder='Password'
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
export default PassStep;
