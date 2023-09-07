import { Box, Text } from "@chakra-ui/react";
import { ThreadCard } from "@/features/thread";
import { PostModal } from "@/features/thread/components/PostThread";
import { API } from "@/lib/api";
import { useEffect, useState } from "react";
import ThreadInterface from "@/interface/Thread";

export default function Home() {
  const [threads, setThreads] = useState<ThreadInterface[]>()

  async function getThreads() {
    const response = await API.get('/threads')
    setThreads(response?.data)
  }

  useEffect(() => {
    getThreads()
  }, [])

  return (
    <>
      <Box mt={7}>
        <Text px={5} fontSize={"2xl"} as="b">Home</Text>
      </Box>

      <PostModal />

      {threads?.map(data => {
        return (
          <ThreadCard 
            key={data.id}
            id={data?.id} 
            author_username={"@rebbecca"}
            author_full_name={"Rebbeca Eltra"}
            author_picture={data?.image}
            content={data?.content}
            image={data?.image}
            is_liked={true}
            likes_count={23}
            posted_at={data?.posted_at}
            replies_count={245}
          />
        )
      })}
    </>
  )
}

