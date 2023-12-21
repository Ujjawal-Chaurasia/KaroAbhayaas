import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    VStack,
    Button,
    Icon,
    Text,
    Stack,
  } from "@chakra-ui/react";
import { FaUserLarge } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi";
  const SideDrawer = ({ isOpen, onClose }) => {
    return (
      <>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton  placement="left"/>
            <DrawerBody>
              <Box pt={8}>
              <Stack  spacing="8" align="center" >
                <VStack spacing="6" >
                    <Button fontSize="sm">Join Us</Button>
                    <Button variant={"outline"} border={0}>
                        <Text textStyle="b1">Classed</Text>
                    </Button>
                    <Button variant={"outline"} border={0}>
                        <Text textStyle="b1">Products</Text>
                    </Button>
                    <Button variant={"outline"} border={0}>
                        <Text textStyle="b1">About Us</Text>
                    </Button>
                </VStack>
                <Icon as={FaUserLarge} boxSize={6}/>
                <Icon as={HiShoppingCart} boxSize={8}/>
            </Stack>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
  export default SideDrawer;
  