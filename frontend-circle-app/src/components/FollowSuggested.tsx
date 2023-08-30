import { Flex, Card, CardBody, Image, Stack, Heading, Text, Button } from "@chakra-ui/react"

export default function FollowSuggested() {
  return (
    <>
      <Card bg={"gray.700"} textColor={"white"} style={{width: "300px"}} p={0}>
        <CardBody>
            <Heading size='sm' mx={2} m={0}>Suggested for you</Heading>

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
        </CardBody>
      </Card>
    </>
  )
}