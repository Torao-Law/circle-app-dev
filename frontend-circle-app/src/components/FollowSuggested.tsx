import { Flex, Card, CardBody, Avatar, Heading, Text, Box, Button } from "@chakra-ui/react"
import data from "@/mocks/follow.json"

export default function FollowSuggested() {
  return (
    <>
      <Card bg={"gray.700"} textColor={"white"} style={{width: "300px"}} p={0}>
        <CardBody>
          <Heading size='sm' mx={2} m={0}>Suggested for you</Heading>
          {
            data.map((data, index) => {
              return (
                <Flex justifyContent={"space-between"} alignItems={"center"} key={index} mt={1}>
                  <Flex alignItems={"center"}>
                    <Box me={2}>
                      <Avatar size='sm' name='Ryan Florence' src={data.author_picture} />
                    </Box>
                    <Box>
                      <Text fontSize={"xs"} m={0} as={"b"} style={{margin: 0, padding: 0}}>{data.author_full_name}</Text>
                      <Text fontSize={"xs"} color={"gray.400"} style={{margin: 0, padding: 0}}>{data.author_username}</Text>
                    </Box>
                  </Flex>
                  <Box>


                    <Button size={"xs"} variant={"outline"} textColor={"white"} rounded={"full"}>{(data.isFollow === true) ? ("Following") : ("Follow")}</Button>
                  </Box>
                </Flex>
              )
            })
          }
        </CardBody>
      </Card>
    </>
  )
}