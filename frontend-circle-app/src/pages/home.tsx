import { Box, Text } from "@chakra-ui/react";
import { ThreadCard } from "@/features/thread";
import Dummy from "@/mocks/thread.json"
import { PostModal } from "@/features/thread/components/PostThread";

export default function Home() {
  return (
    <>
      <Box mt={7}>
        <Text px={5} fontSize={"2xl"} as="b">Home</Text>
      </Box>

      <PostModal />

      {Dummy.map(data => {
        return (
          <ThreadCard 
            id={data.id} 
            author_username={data.author_username}
            author_full_name={data.author_full_name}
            author_picture={data.author_picture}
            content={data.content}
            image={data.image}
            is_liked={data.is_liked}
            likes_count={data.likes_count}
            posted_at={data.posted_at}
            replies_count={data.replies_count}
          />
        )
      })}
    </>
  )
}

