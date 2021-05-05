import { Box, Container, Flex, Text } from '@chakra-ui/layout'
import { Button, Heading, Image, Link } from '@chakra-ui/react';
import React from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Navbar from '../nav-bar/nav-bar';
import './css/home.css'

const ProductPage = () => {
    return (
        <Box height="100vh" backgroundImage="url('https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?cs=srgb&dl=pexels-the-lazy-artist-gallery-1642125.jpg&fm=jpg')"
        bgColor="gray.50" boxShadow="xl">
            <Navbar />
            <Container paddingX="80px" bgColor="gray.50" boxShadow="xl" height="100%" maxWidth="1600px" width="100%" paddingTop="200px">
                <Flex textAlign="center" direction="column" justify="space-around">
                    <Heading fontSize={[ "27pt", "65pt"]} paddingBottom="30px">Our Products</Heading>
                    <Heading fontSize={[ "14pt", "20pt"]} paddingBottom="30px">What do we do for you?</Heading>
                </Flex>
                <Flex direction="column" align="center" width="100%">
                    <Flex marginBottom="20px">
                        <Flex direction="column">
                            <Heading marginBottom="10px">Lifestyle Surveys</Heading>
                            <Text maxWidth="700px">We help you find the right people to live with and rent from using data driven matching features. We use lifestyle surveys to understand your tenant and landlord preferences, feed our matching algorithms, group people based on points of overlap and enable stronger connections between you, prospective housemates and landlords</Text>
                        </Flex>
                        <Flex direction="column">
                            <Heading marginBottom="10px">Search</Heading>
                            <Text maxWidth="700px">A tool for tenants and landlords to find the right people to live with in a centralized way and transparency way. Our search service matches your profile with other users and curates groups of profiles that tightly align with your ideal co-lessee profile for tenants and landlords. Be fully informed about who you’ll be leasing with from the very beginning of your lease seeking process.</Text>
                        </Flex>                    </Flex>
                    <Flex marginBottom="20px">
                        <Flex direction="column">
                            <Heading marginBottom="10px">Lease Management Workflows</Heading>
                            <Text maxWidth="700px">a suite of features to help make the handling of ‘papers’ as seamless as possible over the course of your lease lifecycle. Upload your lease document or use a template from our templates, amend, modify and collaboratively execute the document between your housemates and landlord for convenience and ease of maintenance with Lease Management Workflows.</Text>
                        </Flex>
                        <Flex direction="column">
                            <Heading marginBottom="10px">Landlord Features</Heading>
                            <Text maxWidth="700px">a dedicated set of features that streamlines tenant relationship management for landlords. Find your ideal group of ready to sign tenants and understand who will be living in your rental property before they sign your contract. Maintain transparency and build connections with the tenants to have the landlord experience you want to have.</Text>
                        </Flex>
                        </Flex>
                    <Flex marginBottom="50px">
                        <Flex direction="column">
                            <Heading marginBottom="10px">Lease Log</Heading>
                            <Text maxWidth="700px">a collaborative environment for integrated communications and archiving to make tenant to tenant and tenant to landlord communication central. Communicate, organize and archive time stamped maintenance requests, move-in/move-out logistics, property pictures and general inquiry in a channel dedicated to your rental property for maximum visibility and convenience.</Text>
                        </Flex>
                     </Flex>
                     <Button rightIcon={<ArrowForwardIcon w='10' h="5" />} height="65px" className='login-btn'>
                        <Link href="/register">Sign for more updates on new features or releases</Link>
                    </Button>
                </Flex>
            </Container>
        </Box>
        )
}

export default ProductPage;