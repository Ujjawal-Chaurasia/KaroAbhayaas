import { HiShoppingCart } from "react-icons/hi";
import { FaBars, FaUserLarge } from "react-icons/fa6";
import { Box, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
const Navbar = ({onOpen}) => {
  return (
    <Box maxW="1440px" h="60px"  p={4} boxShadow="md" >  
        <Flex justify="space-between" align="center">
            <Text fontWeight="bold" pl={6}>Karo Abhayaas</Text>
            <Icon as={FaBars} boxSize={6} onClick={onOpen} display={{base: "block",md: "none"}}/>
            <HStack display={{base: "none",md: "flex"}} spacing={{md:"6",lg:"8"}} align="center"  >
                <HStack spacing={{md:"4",lg:"6"}} >
                    <Button>Join Us</Button>
                    <Button variant={"outline"} border={0}>
                        <Text textStyle="b1">Classed</Text>
                    </Button>
                    <Button variant={"outline"} border={0}>
                        <Text textStyle="b1">Products</Text>
                    </Button>
                    <Button variant={"outline"} border={0}>
                        <Text textStyle="b1">About Us</Text>
                    </Button>
                </HStack>
                <Icon as={FaUserLarge} boxSize={6}/>
                <Icon as={HiShoppingCart} boxSize={8}/>
            </HStack>
        </Flex>  
    </Box>
  )
}

export default Navbar