import { Box, Flex, Card, CardBody, Image, Stack, Heading, Text, Button } from "@chakra-ui/react"

export default function MyProfile() {
  return (
    <>
      <Card bg={"gray.700"} textColor={"white"} style={{width: "300px"}} >
        <CardBody>
          <Box>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
              objectFit={"cover"}
              maxH={20}
              width={"100%"}
              backdropFilter="blur(8px)"
              style={{ filter: "blur(1px)" }} 
            />

            <Image
              borderRadius='full'
              boxSize='70px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              position={"absolute"}
              left={10}
              style={{top: "60px", border: "3px solid #4A5568"}}
            />

            <Flex justifyContent={"end"} mt={3}>
              <Button size={"xs"} px={3} borderRadius={"full"} variant='outline' color={"white"}>Edit Profile</Button>
            </Flex>
          </Box>

          <Stack>
            <Flex alignItems={"center"} mt={2} mb={0}>
              <Text className="fa-solid fa-star" fontSize={"xs"} textColor={"yellow"} m={0}></Text>
                <Heading size='md' mx={2} m={0}>Rebbecca Eltra</Heading>
              <Text className="fa-solid fa-star" fontSize={"xs"} textColor={"yellow"} m={0}></Text>
            </Flex>

            <Text fontSize={"xs"} color={"gray.400"} m={0}>@Rebbecca</Text>
            <Text fontSize={"xs"} m={0}>Anjir coeg ini dia bikin hehe</Text>
            <Flex>
              <Text me={3} fontSize={"xs"}>
                <i className="fa-regular fa-heart"></i> 234
              </Text>

              <Text fontSize={"xs"}>
                <i className="fa-regular fa-comment"></i> 243 Replies
              </Text>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}
