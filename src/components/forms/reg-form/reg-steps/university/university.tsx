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
import { CUIAutoComplete } from 'chakra-ui-autocomplete'


const UniStep = (props: any) => {
  const { setUniversity, next, university } = props;

  const [universities, setUniversitities] = React.useState();

  const onPressEnter = useCallback(
    (event) => {
      // console.log(event);
      if (event.key === 'Enter') next();
    },
    [next]
  );

  const setUni = useCallback(
    (event) => {
      setUniversity(event.target.value);
    },
    [setUniversity]
  );

  const backToLogin = () => {
    window.location.assign("/login")
  }

  return (
    <div>
      <Tooltip label='Cancel Registration and go home'>
        <CloseButton onClick={backToLogin} />
      </Tooltip>
      <Container
        fontSize={['sm', 'md', 'lg', 'xl']}
        ww='100ch'
        bg='white'
        mw={['0vh', '50vw']}
        my={['35vh']}
      >
        <Stack>
          <Heading>
            Hey! Let's get started. What university do you attend?
          </Heading>
          <Flex>
            <Input
              type='name'
              name='university'
              placeholder='University'
              onChange={setUni}
              onKeyPress={onPressEnter}
              autoFocus
              value={university}
            />
          </Flex>
          <Button onClick={next}>Next</Button>
        </Stack>
      </Container>
    </div>
  );
};
export default UniStep;
