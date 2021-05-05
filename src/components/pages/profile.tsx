// Get the user's name, user's email
import { Container, Heading, useToast, Text, Tabs, Tab, TabList, TabPanel, TabPanels, Input, Button, Flex, FormControl, FormHelperText, FormLabel} from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import firebase from '../../firebase';

// Get the user

const ProfilePage = (props: any) => {

    const [user, setUser] = useState<firebase.User | null>(null)
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
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

    React.useEffect(() => {
        setUser(firebase.auth().currentUser);
    }, [])

    return (
        <Container boxShadow="xl" height="100vh" maxHeight="100vh" maxWidth="1600px" width="100%" paddingTop="200px">
            <Tabs orientation="vertical">
                <TabList>
                    <Tab>My Profile</Tab>
                    <Tab>Change Email</Tab>
                    <Tab>Change Password</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>2</TabPanel>
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
    )
}

export default ProfilePage;
