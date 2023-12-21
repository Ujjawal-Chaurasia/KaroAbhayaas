import React from 'react'
import DashboardLayout from '../../../components/DashboardLayout'
import { Box, Button, Card, FormControl, HStack, Input, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <DashboardLayout>
                <Card
                    bg="white"
                    p={{
                        base:"10",
                        md:"20",
                    }}
                    border="1px solid #D6D6D6"
                    maxW="515px"
                    mx="auto"
                >
                <Stack justify="center" spacing={10} mt={5}>
                    <Stack spacing={7}>
                        <FormControl>
                            <Input name="name" placeholder='NAME'/>
                        </FormControl>
                        <FormControl>
                            <Input  name="password" placeholder='EMAIL'/>
                        </FormControl>
                            <Stack spacing={3}>
                                <HStack gap="26px">
                                    <FormControl>
                                        <Input  name="password" placeholder='PHONE NUMBER'/>
                                    </FormControl> 
                                    <Button type="submit">SEND OTP</Button>
                                </HStack>
                                <Text textStyle="p3" pl="4" color="black.60" >Didn’t Receive It? <Link to="/signup">
                                    <Text as="span" color="p.blue">RESEND</Text></Link>
                                </Text>
                                <FormControl>
                                    <Input  name="otp" placeholder='OTP'/>
                                </FormControl>
                            </Stack> 
                    </Stack>
                    <Box alignSelf="center"><Button type="submit">SIGN UP</Button></Box>
                    <Text textStyle="p3" color="black.60" textAlign="center">Already Have An Account?<Link to="/signin">
                        <Text as="span" color="p.blue">Log In</Text></Link>
                    </Text>
                </Stack>
                </Card>
    </DashboardLayout>
  )
}

export default Signup