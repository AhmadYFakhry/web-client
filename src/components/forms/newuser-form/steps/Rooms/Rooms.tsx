import React, { useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
import './PropertyType.css';
import {
  Container,
  Heading,
  Image,
  Button,
  Flex,
  Spacer,
  Stack,
  Slider,
  SliderTrack,
  Box,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
const Rooms = (props: any) => {
  const { setPropertyType, next } = props;

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
      <Stack>
        <Slider defaultValue={1} min={1} max={5} step={1}>
          <SliderTrack bg='yellow.100'>
            <Box position='relative' right={10} />
            <SliderFilledTrack bg='yellow' />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
        <Slider defaultValue={1} min={1} max={5} step={1}>
          <SliderTrack bg='yellow.100'>
            <Box position='relative' right={10} />
            <SliderFilledTrack bg='yellow' />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
      </Stack>
    </Container>
  );
};
export default Rooms;
