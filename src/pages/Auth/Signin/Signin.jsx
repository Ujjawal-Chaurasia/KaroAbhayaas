import React from 'react'
import DashboardLayout from '../../../components/DashboardLayout'
import { Box, Button, Card, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Signin = () => {
  return (
    <DashboardLayout>
                <Card
                    bg="white"
                    px={{
                        base:"10",
                        md:"20",
                    }} 
                    py={{
                        base:"5",
                        md:"10",
                    }}
                    border="1px solid #D6D6D6"
                    maxW="571px"
                    mx="auto"
                >
                    <Stack justify="center" spacing={10} mt={10}>
                    <Stack spacing={5}>
                    <FormControl>
                        <FormLabel htmlFor='name'>Name</FormLabel>
                        <Input  name="name" placeholder='USERNAME'/>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input  name="password" placeholder='PASSWORD'/>
                    </FormControl>
                    </Stack>
                    <Box alignSelf="center"><Button type="submit">Login</Button></Box>
                    <Text textStyle="p3" color="black.60" textAlign="center">Don’t have an account?<Link to="/signup">
                        <Text as="span" color="p.purple">Sign Up</Text></Link>
                    </Text>
                    </Stack>
                </Card>
    </DashboardLayout>
  )
}

export default Signin