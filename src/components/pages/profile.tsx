// Get the user's name, user's email
import { Image, Container, Heading, useToast, Text, Tabs, Tab, TabList, TabPanel, TabPanels, Input, Button, Flex, FormControl, FormHelperText, FormLabel, Box, Divider, Checkbox, Switch} from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import firebase from '../../firebase';
import Navbar from '../nav-bar/nav-bar';

// Get the user

const ProfilePage = (props: any) => {

    const [user, setUser] = useState<firebase.User | null>(null)
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [unsub, setUnsub] = React.useState(false)
    const toast = useToast()

    const handleChange = (event: any) => setEmail(event.target.value)
    const handleChangePassword = (event: any) => setPassword(event.target.value)

    const changeEmail = async () => {

        try {
            await user?.updateEmail(email)
            toast({
                title: "Email updated.",
                status: "success",
                duration: 9000,
                isClosable: true,
              })
        } catch (error) {
            toast({
                title: "Email failed to be updated.",
                status: "error",
                duration: 9000,
                isClosable: true,
              })
        }
    }

    const changePassword = async () => {
        try {
            await user?.updatePassword(email)
            toast({
                title: "Password updated.",
                status: "success",
                duration: 9000,
                isClosable: true,
              })
        } catch (error) {
            toast({
                title: "Password failed to be updated. Make sure your password fits the specifications",
                status: "error",
                duration: 9000,
                isClosable: true,
              })
        }
    }

    const onChange = () => {
        setUnsub(!unsub);
    }

    React.useEffect(() => {
        setUser(firebase.auth().currentUser);
    }, [])

    return (
        <Box>
            <Navbar />
            <Container boxShadow="xl" height="100vh" maxHeight="100vh" maxWidth="1600px" width="100%" paddingTop="200px">
                <Heading fontSize="40pt" marginBottom="20px">My Account</Heading>
                <Divider />
                <Tabs marginTop="20px" orientation="vertical">
                    <TabList>
                        <Tab>My Profile</Tab>
                        <Tab>Change Email</Tab>
                        <Tab>Change Password</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel width="100%" height="100%">
                            <Flex justify="center">
                                <Flex direction="row" justify="" align="center">
                                    <Heading marginBottom="20px" width="100%">Your Profile View</Heading>
                                </Flex>
                            </Flex>
                            <Divider />
                            <Flex direction="column" align="center">
                                <Image src={user?.photoURL || '../../images/user.png'}></Image>
                                <Text fontWeight="bold">{user?.displayName}</Text>
                                <Text>Your Email: {user?.email}</Text>
                            </Flex>
                        </TabPanel>
                        <TabPanel>
                            <form action="submit" onSubmit={changeEmail}>
                                <Flex marginLeft="30px" direction="column" height="200px" justify="space-between">
                                    <Heading>Change Your Email</Heading>
                                    <Text>Change the email you receive communications to</Text>
                                    <FormControl id="email">
                                        <Input
                                            width="400px"
                                            value={email}
                                            onChange={handleChange}
                                            type="email" placeholder="New Email"
                                            />
                                        <FormHelperText>We'll never share your email.</FormHelperText>
                                    </FormControl>

                                    <Button width="100px" type="submit">Submit</Button>
                                </Flex>
                            </form>
                        </TabPanel>
                        <TabPanel>
                            <form action="submit" onSubmit={changePassword}>
                                <Flex marginLeft="30px" direction="column" height="200px" justify="space-between">
                                    <Heading>Change Your Password</Heading>
                                    <FormControl id="email">
                                        <Input
                                            width="300px"
                                            value={password}
                                            onChange={handleChangePassword}
                                            type="password" placeholder="New Password"
                                            />
                                        <FormHelperText>Length of 5, mix of lower and uppercase characters</FormHelperText>
                                    </FormControl>

                                    <Button width="100px" type="submit">Submit</Button>

                                </Flex>
                            </form>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
        </Box>
    )
}

export default ProfilePage;
