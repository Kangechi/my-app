"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function AddPost({onAdd}) {
    const [title, setTitle ] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        
        const {error} = await supabase
        .from('Posts')
        .insert({title, content})

        if (!error) {
            setTitle("")
            setContent("")
            onAdd()

        }
        setLoading(false)
        
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-10">
            <h2 className="text-x1 font-semibold ">Add Post</h2>
            <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500"
            required
            />
            <textarea
            placeholder="Content"
            value={content}
            onChange={e => setContent.target.value}
            className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 h-24" 
            required
            />
            
            <button
            type="submit"
            disabled= {loading}
            className="bg-cyan-600 hover;bg-cyan-500 text-white font-semibold rounded-lg p-3 transition-colors disabled:opacity-50">
                {loading ? "Saving..." : 'Add Post'}
            </button>
             </form>
    )
}