import React, { useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
import './PropertyType.css';
import RadioCard from '../../../../radio-card/RadioCard';
import {
  Container,
  Heading,
  Button,
  HStack,
  Stack,
  useRadioGroup,
} from '@chakra-ui/react';

const PropertyType = (props: any) => {
  const { propertyType, setPropertyType, next } = props;
  const options = ['Apartment', 'Home', 'Townhouse', 'Filler'];

  const setProp = useCallback(
    (event) => {
      console.log(event);
      setPropertyType(event);
    },
    [setPropertyType]
  );

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'PropType',
    defaultValue: propertyType || 'Apartment',
    onChange: setProp,
  });

  const group = getRootProps();

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
        <HStack {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            );
          })}
        </HStack>
        <Button onClick={next}>Next</Button>
      </Stack>
    </Container>
  );
};
export default PropertyType;
