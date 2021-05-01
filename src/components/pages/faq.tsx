import { Container, Flex, Text } from '@chakra-ui/layout'
import { Heading, Image } from '@chakra-ui/react';
import React from 'react'


const FaqPage = () => {
    return (
        <Container height="700px" maxWidth="1600px" width="100%" paddingTop="200px">
            <Heading fontSize="30pt" paddingBottom="30px">Frequently Asked Questions</Heading>
            <Flex justify="space-between" direction="column">
                <Flex direction="row">
                    <Image width="50%" src="../../images/account.svg" />
                    <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
                </Flex>
                <Flex direction="row-reverse">
                    <Heading >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Heading>
                    <Text width="50%">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
                </Flex>
                <Flex direction="row">
                    <Heading width="50%">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Heading>
                    <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
                </Flex>
            </Flex>
        </Container>
    )
}

export default FaqPage;