import { Flex, Card, CardBody, Text, Box } from "@chakra-ui/react"

export default function Footer() {
  return (
    <>
      <Card bg={"gray.700"} textColor={"white"} style={{width: "300px"}} p={0}>
        <CardBody>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize='xs' as={"b"}>Developer by Dandi Saputra</Text>
          <Text >.</Text>
          <Text fontSize='sm' className="fa-brands fa-facebook"></Text>
          <Text fontSize='sm' className="fa-brands fa-github"></Text>
          <Text fontSize='sm' className="fa-brands fa-instagram"></Text>
          <Text fontSize='sm' className="fa-brands fa-linkedin"></Text>
          </Flex>
          <Box>
            <Text style={{fontSize: '10px'}}>Powered by Dumbways Indonesia . #1Coding Bootcamp</Text>
          </Box>
        </CardBody>
      </Card>
    </>
  )
}