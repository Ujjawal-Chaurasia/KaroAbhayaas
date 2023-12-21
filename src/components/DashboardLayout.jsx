import { Box, Container, Flex, Grid, useDisclosure } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";
import Navbar from "./Navbar";

const DashboardLayout = ({children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box m="auto" maxH="1216px" maxW="1440px" bg="white" >
    <Flex>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <Navbar onOpen={onOpen} />
        <Container
          overflowX="hidden"
          overflowY="auto"
          
          pt={{base:"60px",md:"100px"}}
          pb="80px"
          minW="full"
          minH="100vh"
        >
          {children}
        </Container>
      </Box>
    </Flex>
    </Box>
  );
};

export default DashboardLayout;
