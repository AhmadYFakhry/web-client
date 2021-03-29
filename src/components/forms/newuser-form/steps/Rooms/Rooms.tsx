import React, { useCallback } from 'react';
import {
  Container,
  Heading,
  Button,
  Text,
  Slider,
  SliderTrack,
  Box,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import './Rooms.css';

const Rooms = (props: any) => {
  const {
    roomNumber,
    bathroomNumber,
    setRoomNumber,
    setBathroomNumber,
    next,
    prev,
  } = props;

  const setBathroomNum = useCallback(
    (number) => {
      setBathroomNumber(number);
    },
    [setBathroomNumber]
  );

  const setRoomNum = useCallback(
    (number) => {
      setRoomNumber(number);
    },
    [setRoomNumber]
  );

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
      <Stack className='stacks'>
        <Flex>
          <Text>{1}</Text>
          <Spacer></Spacer>
          <Text>Number of Rooms</Text>
          <Spacer></Spacer>
          <Text>{'5+'}</Text>
        </Flex>
        <Slider
          onChangeEnd={setRoomNum}
          defaultValue={roomNumber}
          min={1}
          max={5}
          step={1}
        >
          <SliderTrack bg='red.100'>
            <Box position='relative' right={10} />
            <SliderFilledTrack bg='tomato' />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>

        <Flex>
          <Text>{1}</Text>
          <Spacer></Spacer>
          <Text>Number of Rooms</Text>
          <Spacer></Spacer>
          <Text>{'5+'}</Text>
        </Flex>
        <Slider
          onChangeEnd={setBathroomNum}
          defaultValue={bathroomNumber}
          min={1}
          max={5}
          step={1}
        >
          <SliderTrack bg='red.100'>
            <Box position='relative' right={10} />
            <SliderFilledTrack bg='tomato' />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
        <Stack>
          <Button onClick={next}>Next</Button>
          <Button onClick={prev}>Previous</Button>
        </Stack>
      </Stack>
    </Container>
  );
};
export default Rooms;
