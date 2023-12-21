import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
const OrderCard = ({productNumber,productName,orderDate,address}) => {
  return (
    <Box px={{base:"4px",sm:'12px',md:"24px",lg:"26px"}} py={{base:"4px",md:"12px"}} border="1px solid #D8D8D8"  >
    <Flex justify="space-between" gap={4} align="center">
        <Box>
        <Text textStyle="h1">ORDER #{productNumber}</Text>
        <Flex maxW="422px" gap={4}>
            <Stack>
                <Text textStyle="h6" fontWeight="700">PRODUCT:</Text>
                <Text textStyle="h6" fontWeight="700">DATE:</Text>
                <Text textStyle="h6" fontWeight="700">ADDRESS:</Text>
            </Stack>
            <Stack>
                <Text textStyle="h6">{productName}</Text>
                <Text textStyle="h6">{orderDate}</Text>
                <Text textStyle="h6">{address}</Text>
            </Stack>                           
        </Flex>
        </Box>
        <Stack mr={{base:"2px",md:"7"}}>
            <Button px={{base:"4px",sm:"24px",md:"32px",lg:"50px"}} fontSize={{base:'10px',md:"10px"}} py={3}>TRACK ORDER</Button>
            <Button px={{base:"4px",sm:'24px',md:"32px",lg:"50px"}} fontSize={{base:'10px',md:"10px"}} py={3}>VIEW DETAILS</Button>
            <Button px={{base:"4px",sm:"24px",md:"32px",lg:"50px"}} fontSize={{base:'10px',md:"10px"}} py={3}>DOWNLOAD INVOICE</Button>
        </Stack>
    </Flex>
    </Box>
  )
}

export default OrderCard