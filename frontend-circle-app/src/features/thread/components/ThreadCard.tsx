import ThreadInterface from "@/interface/Thread"
import { Avatar, Box, Card, CardBody, Heading, Text, Flex, Image } from "@chakra-ui/react"

export function ThreadCard(props: ThreadInterface) {
  const { author_full_name, author_picture, author_username, content, id, image, is_liked, likes_count, posted_at, replies_count } = props

  return (
    <>
      <Flex borderWidth="0px" borderBottomWidth="1px" borderColor="whiteAlpha.600" p={5} alignContent={"top"}>
        <Box me={5}>
          <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
        </Box>

        <Box>
          <Flex alignItems={"center"}>
            <Text fontSize='lg' as='b' mt={0} me={2}>Segun Adebayo</Text>
            <Text fontSize='xs' textColor={"whiteAlpha.800"} >Creator, Chakra UI</Text>
          </Flex>
      
          <Box>
            <Text>View a summary of all your customers over the last month.</Text>
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
              alt='Caffe Latte'
            />
            
            <Flex mt={2}>
              <Text me={3}>
                <i className="fa-regular fa-heart"></i> 234
              </Text>

              <Text>
                <i className="fa-regular fa-comment"></i> 243 Replies
              </Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  )
}
