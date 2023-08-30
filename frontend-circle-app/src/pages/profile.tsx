import { useState } from 'react'
import dummy from '@/mocks/thread.json'

interface Thread {
  author_picture: string
  author_full_name: string
  author_username: string
  posted_at: string
  content: string
  image: string
  likes_count: number
  replies_count: number
  is_liked: boolean
}

export default function Profile() {

  return (
    <div>Ini halaman profile</div>
  )
}
