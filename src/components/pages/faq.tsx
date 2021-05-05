import { Box, Container, Flex, Text } from '@chakra-ui/layout'
import { Button, Heading, Image, Link } from '@chakra-ui/react';
import React from 'react'
import Navbar from '../nav-bar/nav-bar';
import './css/home.css'

const FaqPage = () => {
    return (
        <Box height="100%" backgroundImage="url('https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?cs=srgb&dl=pexels-the-lazy-artist-gallery-1642125.jpg&fm=jpg')"
        bgColor="gray.50" boxShadow="xl">
            <Navbar />
            <Container bgColor="gray.50" paddingX="80px" boxShadow="xl" height="100%" maxWidth="1600px" width="100%" paddingTop="200px">
                <Flex direction="column">
                    <Heading marginBottom="20px">About Us</Heading>
                    <Heading marginBottom="20px" size="sm">What do we do as a company for the students?</Heading>
                    <Text marginBottom="20px">The Lease Genius offers a suite of virtual services for student tenants to make their leasing journey more friendly. We provide an end-to-end service that will help you find compatible housing and housemates through our use of intimate knowledge. </Text>
                    <Heading marginBottom="20px" size="sm">What do we do as a company for the landlords?</Heading>
                    <Text marginBottom="20px">We offer high-quality tenant flow and room-filling services for landlords, property managers and the like. We have a vast network of Canadian student profiles composed of recording lifestyle details results, preferences, and previous tenant histories. Our virtual leasing service aims to help landlords to get the most out of their lease agreements by providing background checks, lease creation/signing and tenant relationship management.</Text>
                </Flex>
                <Flex direction="column">
                    <Heading marginBottom="20px">In Depth Leasing Requirements</Heading>
                    <Heading marginBottom="20px" size="sm">How do I receive consent for a sublet?</Heading>
                    <Text marginBottom="20px">
                    Tenants must obtain the landlord’s consent to sublet their premises. Under the Residential Tenancies Act, the landlord may not “arbitrarily or unreasonably withhold consent.” It is ideal for the tenant to receive the consent in writing with the sub-tenancy being drafted to end no later than one day prior to the end of the tenant’s lease with the landlord. The sub-tenant needs to keep and deliver up the property in good condition, except for reasonable wear and tear.
                    </Text>
                    <Heading marginBottom="20px" size="sm">What are the best practices related to finding a housemate?</Heading>
                    <Text marginBottom="20px">
                        When searching for a housemate there are three main steps that should be taken: conduct multiple interviews, ask the right questions and make sure everything is in writing. Talk to several different candidates then meet again with the few that seem to be trustworthy and compatible. Of course you will want to know about their likes, dislikes and lifestyle in order to coexist well. Here at The Lease Genius we take a data driven approach to find a house for you or your group based on preferences and personas. There is quite a large impact that housemates can have on your wellbeing, you can learn more about that here.
                    </Text>
                    <Heading marginBottom="20px" size="sm">How do I find a good Landlord?</Heading>
                    <Text marginBottom="20px">
                        Tenants should be looking for three key aspects in their landlord: alignment, responsiveness and transparency. Finding a good landlord is just as important as finding a good apartment or house. Let’s say you find the perfect place to live but have an absentee landlord, this can negatively affect your living situation. Taking the time to do your research, asking important questions and getting a feel for the management that runs your potential place of living are all crucial aspects. Although it can all seem overwhelming our team will make sure that you sign with a respectable landlord with a good reputation. Our connection and expertise will be there to help you facilitate the entire process.
                    </Text>
                    <Heading marginBottom="20px" size="sm">What information does a landlord have to give to a new tenant?</Heading>
                    <Text marginBottom="20px">
                        A landlord must give all new tenants the brochure: <Link color="twitter.700" href="https://tribunalsontario.ca/documents/ltb/Brochures/Information%20for%20New%20Tenants.html">Information for New Tenants</Link>, which includes information about the rights and responsibilities of landlords and tenants, the role of the LTB and how to contact the LTB. The landlord must give the tenant the brochure on or before the day the tenancy begins, even if the tenant does not move in on that date. The landlord has 21 days after the tenant has signed and returned the tenancy agreement to give the tenant a copy with the signatures of both the tenant and the landlord.                    </Text>
                    <Heading marginBottom="20px" size="sm">What Is the difference between assigning and subletting a unit?</Heading>
                    <Text marginBottom="20px">
                        Assigning a unit means that the tenant moves out of the unit permanently and transfers their tenancy to another person. All the terms of the original rental agreement stay the same – for example, the amount of the rent and what services are included. Subletting a unit means that the tenant moves out of the unit for a period of time but plans to move back in before the end of the tenancy. For more information view:
                        <Link color="twitter.700" href="https://tribunalsontario.ca/documents/ltb/Brochures/How%20a%20Tenant%20Can%20End%20Their%20Tenancy%20(EN).html"> How a Tenant Can End Their Tenancy</Link>                 </Text>
                    <Heading marginBottom="20px" size="sm">Can a landlord evict a tenant in the middle of their lease?</Heading>
                    <Text marginBottom="20px">
                        A landlord can evict a tenant in the middle of their tenancy agreement in certain situations– usually where the tenant or someone the tenant let into their building, has done something wrong. For example, the tenant has not paid their rent or has damaged the rental property. The reasons for evicting a tenant are explained in the brochure:
                        <Link color="twitter.700" href="https://tribunalsontario.ca/documents/ltb/Brochures/Guide%20to%20RTA%20(English).html">
                            A Guide to the Residential Tenancies Act.
                        </Link>
                    </Text>
                    <Heading marginBottom="20px" size="sm">How do I review a lease agreement?</Heading>
                    <Text marginBottom="20px">
                            Seeing as a lease is a contract, it is imperative you will want to understand what it says and how it will affect you. Make a checklist of things you should look for before signing the lease: how long does the lease run, does the lease limit the number of people allowed in the rental property, who is responsible for utilities, what are the security deposit requirements and so on. If you’re relatively inexperienced with reviewing a lease, we will review the contract and make sure the conditions are fair and applicable. For more in depth information about reviewing a lease please click <Link color="twitter.700" href="https://www.findlaw.com/realestate/landlord-tenant-law/reviewing-a-lease-checklist.html">
                             here.</Link>
                    </Text>
                    <Heading marginBottom="20px" size="sm">What are the best practices related to finding a housemate?</Heading>
                    <Text marginBottom="20px">
                        When searching for a housemate there are three main steps that should be taken: conduct multiple interviews, ask the right questions and make sure everything is in writing. Talk to several different candidates then meet again with the few that seem to be trustworthy and compatible. Of course you will want to know about their likes, dislikes and lifestyle in order to coexist well. Here at The Lease Genius we take a data driven approach to find a house for you or your group based on preferences and personas. There is quite a large impact that housemates can have on your wellbeing, you can learn more about that

                        <Link color="twitter.700" href="https://psyarxiv.com/gfr5n/">
                            here.
                        </Link>
                    </Text>
                </Flex>
                <Flex  direction="column">
                    <Heading marginBottom="20px" >Maintenance and Repair</Heading>
                        <Heading marginBottom="20px" size="sm"> As a tenant what are my obligations concerning the condition of the rented premises?</Heading>
                        <Text marginBottom="20px">
                                A tenant will be responsible for ordinary cleanliness and for damage caused either deliberately or negligently by the tenant, or a tenant’s family member or guest.
                        </Text>
                        <Heading marginBottom="20px" size="sm">What are the obligations of the landlord concerning the condition of the rented premises?</Heading>
                        <Text marginBottom="20px">
                             landlord has to keep the rental property in a good state of repair. If something is not working due to normal wear and tear, the landlord must fix it. A landlord needs to obey all health, safety and maintenance standards in any provincial laws or municipal bylaws.
                        </Text>
                </Flex>
            </Container>
        </Box>
        )
}

export default FaqPage;