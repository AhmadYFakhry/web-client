import React, { useEffect } from 'react';
import { Container, Stack, Skeleton, Spinner } from '@chakra-ui/react';
import { nextTick } from 'node:process';
const Loading = (props: any) => {
  const { next } = props;
  useEffect(() => {
    const timeout = setTimeout(() => {
      //   setCount(1);
      next();
    }, 750);
  }, []);
  return (
    <Container
      centerContent
      my={['45vh']} //
    >
      <Stack>
        {/* <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' /> */}
        <Spinner size='xl' />
      </Stack>
    </Container>
  );
};
export default Loading;
