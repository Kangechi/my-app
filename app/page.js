"use client"

import { useState, useEffect } from "react"
import AddPost from "./components/AddPost"
import {supabase} from "../lib/supabase"

export default function Home() {
  const [Posts, setPosts] = useState([])
  async function fetchPosts () {
    const {data, error} = await supabase
    .from('Posts')
    .select('*')
    .order('created_at', {ascending: false})
    if (!error) setPosts(data)
  }
useEffect(() => {
  fetchPosts()
}, [])

  return (
    <main className="min h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-4">
        My Posts
      </h1>
      <p className="text-gray-400 text-xl mb-12 text center max-w-lg">
        Reading live from my database
      </p>
      <AddPost onAdd={fetchPosts} />

      <div className="flex flex-col gap-4">
       {Posts && Posts.map(Post => (
        <div key={Post.id} className="bg-gray-800 rounded-x1 p-6 border-gray-700 ">
          <p className="text-gray-400 text-xs mb-2">{new Date(Post.created_at).toLocaleDateString()} </p>
          <h2 className="text-x1 font-semibold mb-2">{Post.title}</h2>
          <p className="text-gray-300">{Post.content}</p>
        </div>
       ))}
       {Posts && Posts.length === 0 && (
        <p className="text-gray-500"> No posts yet. Add some in Supabase</p>
       )}
      </div>
    </main>
  )
}