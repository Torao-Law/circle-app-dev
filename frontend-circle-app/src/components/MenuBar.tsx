import { Link } from 'react-router-dom'
import { Box, Button, Text } from '@chakra-ui/react'

export default function MenuBar() {
  return (
    <>
      <Box position="fixed">
        <Text color={'green'} as='b' fontSize='4xl'>circle</Text>
        <ul>
          <Box my={5} textColor={'white'}>
            <Link to="/">
              <i className="fas fa-house"></i> Home
            </Link>
          </Box>
          <Box my={5} textColor={'white'}>
            <Link to="/search">
              <i className="fa-solid fa-magnifying-glass"></i> Search
            </Link>
          </Box>
          <Box my={5} textColor={'white'}>
            <Link to="/follow">
              <i className="fa-regular fa-heart"></i> Follows
            </Link>
          </Box>
          <Box my={5} textColor={'white'}>
            <Link to="/profile">
              <i className="fa-regular fa-user"></i> Profile
            </Link>
          </Box>
        </ul>
        <Box>
          <Button colorScheme='whatsapp' borderRadius="full" size='md' px={20}>Create Post</Button>
        </Box>
      </Box>

    </>
  )
}

