import { Container, Text } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/react';
import React from 'react'


const Filler = () => {
    return (
        <Container height="700px" maxWidth="1600px" width="100%" paddingTop="200px">
            <Heading fontSize="30pt" paddingBottom="30px">Coming Soon...</Heading>
            <Text>We haven't finished this part yet, check back for updates or sign up to get updates to your email!</Text>
        </Container>
    )
}

export default Filler;