import { Box, Flex } from "@chakra-ui/react";
import MenuBar from "@/components/MenuBar";
import MyProfile from "@/components/MyProfile";
import ChildrenProps from "@/interface/Children"
import FollowSuggested from "@/components/FollowSuggested";

export default function Main({children}: ChildrenProps) {
  return (
    <>
      <Flex width="100%" justify="space-between" px={5} bg='gray.800'>
        <Box mt={5} width={"20%"}>
          <MenuBar />
        </Box>
      
        <Box w="50%" mx={5} borderWidth='1px' borderY={1} borderColor='whiteAlpha.500' textColor={'white'} >
          {children}  
        </Box>

        <Box mt={10} width={"25%"}>
          <Box position="fixed">
            <Box>
              <MyProfile />
            </Box>
            
            <Box mt={3}>
              <FollowSuggested />
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  )
}
