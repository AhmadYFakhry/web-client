import React, { useCallback } from 'react';
import RadioCard from '../../../../radio-card/RadioCard';
import './LandlordType.css';
import {
  Container,
  Heading,
  Button,
  Spacer,
  Stack,
  useRadioGroup,
} from '@chakra-ui/react';
const LandlordType = (props: any) => {
  const options = ['Property Management Company', 'X', 'X'];
  const { landlordType, setLandlordType, next, prev } = props;

  const setLandlord = useCallback(
    (event) => {
      console.log(event);
      setLandlordType(event);
    },
    [setLandlordType]
  );

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'PropType',
    defaultValue: landlordType || 'Property Management Company',
    onChange: setLandlord,
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
      <Stack {...group} className='button-stack'>
        {options.map((value, io) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
        <Spacer />
        <Button onClick={next}>Next</Button>
        <Button onClick={prev}>Previous</Button>
      </Stack>
    </Container>
  );
};
export default LandlordType;
