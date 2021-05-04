// Get the user's name, user's email
import { Container, Heading, useToast, Text, Tabs, Tab, TabList, TabPanel, TabPanels, Input, Button} from '@chakra-ui/react';
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
        <Container maxWidth="1600px" width="100%" paddingTop="200px">
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
                            <Heading>Change Your Email</Heading>
                            <Text>Change the email you receive communications to</Text>
                            <Input
                                value={email}
                                onChange={handleChange}
                                type="email" placeholder="New Email"
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </TabPanel>
                    <TabPanel>
                        <form action="submit" onSubmit={changePassword}>
                            <Heading>Change Your Password</Heading>
                            <Text>Change the email you receive communications to</Text>
                            <Input
                                value={password}
                                onChange={handleChangePassword}
                                type="password" placeholder="New Email"
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}

export default ProfilePage;