import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Container, Flex, Text } from '@chakra-ui/layout'
import { Button, Heading, Image, Link } from '@chakra-ui/react';
import React from 'react'
import Navbar from '../nav-bar/nav-bar';
import './css/home.css'

const HomePage = () => {
    return (
        <Box height="100vh" backgroundImage="url('https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?cs=srgb&dl=pexels-the-lazy-artist-gallery-1642125.jpg&fm=jpg')"
        bgColor="gray.50" boxShadow="xl">
            <Navbar />
            <Container bgColor="gray.50" boxShadow="xl" height="100%" maxWidth="1600px" width="100%" paddingTop="200px">
                <Flex direction="column" textAlign="center" marginTop="20%" justify="space-around">
                    <Heading fontSize={[ "27pt", "65pt"]} paddingBottom="30px">Find Your Next Home</Heading>
                    <Heading fontSize={[ "14pt", "20pt"]} paddingBottom="30px">Introducing Tenant+ by The Lease Genius</Heading>
                </Flex>
                <Flex direction="column" textAlign="center" align="center" width="100%">
                    <Text marginBottom="20px" width="1000px" fontSize="11pt">
                        Sign up for our limited prototype launch and tell us about your tenant and lifestyle preferences. In this release you will be able to create an account, detail your tenant preferences and learn more about what our first full product release will be able to do. See our [LINK] FAQ page for common tips related to the people and process of finding a lease and see our product page for a sneak peak of what’s to come in the next few months!
                    </Text>
                <Button rightIcon={<ArrowForwardIcon w='10' h="5" />} height="65px" className='login-btn'>
                    <Link href="/register">Sign for more updates on new features or releases</Link>
                </Button>
                </Flex>
            </Container>
        </Box>
        )
}

export default HomePage;