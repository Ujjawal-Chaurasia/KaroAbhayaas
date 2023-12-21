import React, { useContext } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Box, Button, Card, Divider, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import OrderCard from './components/OrderCard'
import { OrderContext } from '../../context/OrderProvider'
const Base = () => {
    const orders=useContext(OrderContext);
  return (
    <DashboardLayout>
        <Box  maxW="1104px" mx="auto" border="1px solid #D8D8D8"  >
            <Box px={{base:"12px",sm:'16px',md:"32px"}} mx="auto" py="26px" >
                <Flex justify="flex-start" flexDir={{base:"column",sm:'row'}} gap={{base:"18px",sm:"16px",md:"60px"}}>
                    <Stack>
                        <Text textStyle="h1">Amit Jha</Text>
                        <Text>+91774690033</Text>
                        <Text>amit.jha6700@gmail.com</Text>
                    </Stack>
                    <Divider h={{base:"0",sm:"167px"}} orientation={{base:"horizontal",sm:"vertical"}}  border="1px solid #CECECE"/>
                    <Stack>
                        <Text textStyle="h1">ADDRESS</Text>
                        <Text maxW="325px">R107, AJMERA INFINITY, KARUNA NAGAR, ELECTRONIC CITY, BANGALORE, INDIA PIN: 846009</Text>
                    </Stack>                     
                </Flex>
                <HStack pt="4px" gap={4}>
                    <Button>EDIT</Button>
                    <Button>LOGOUT</Button>
                </HStack>
            
            </Box>
            <Divider border="1px solid #D8D8D8"/>   
            <Box maxW="1030px" mx="auto" pb={12}>
            <Tabs variant='unstyled' pt="46px">
            <TabList  borderBottom="1px solid #D8D8D8">
                <Tab bg="#E9E9E9" boxShadow="xl" px="18px" py="12px" _selected={{ color: 'white', bg: 'black' }}>ORDERS</Tab>
                <Tab bg="#E9E9E9" boxShadow="xl" px="18px" py="12px" _selected={{ color: 'white', bg: 'black' }}>TESTS</Tab>
                <Tab bg="#E9E9E9" boxShadow="xl" px="18px" py="12px" _selected={{ color: 'white', bg: 'black' }}>Q/A</Tab>
            </TabList>
            <TabPanels   mt="41px">
                <TabPanel p={0}  h="450px"  overflowY="auto" >
                    <Stack spacing={5} >
                    {
                        orders.map((order)=>(
                        <OrderCard key={order.id}
                            productNumber={order.productNumber}
                            productName={order.productName}
                            orderDate={order.orderDate}
                            address={order.address}
                        />))
                    }
                    </Stack>
                </TabPanel >
                <TabPanel p={0}  h="450px"  overflowY="auto">
                    <Stack spacing={5} >
                    {
                        orders.map((order)=>(
                        <OrderCard key={order.id}
                            productNumber={order.productNumber}
                            productName={order.productName}
                            orderDate={order.orderDate}
                            address={order.address}
                        />))
                    }
                    </Stack>
                </TabPanel >
                <TabPanel p={0}  h="450px"  overflowY="auto">
                    <Box>Hello</Box>
                </TabPanel >
            </TabPanels>
            </Tabs>
            </Box>
        </Box>
    </DashboardLayout>
  )
}

export default Base