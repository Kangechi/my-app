'use client'//reactivity
import {useState} from 'react'
import { useRouter } from 'next/navigation'
import { signIn , signUp} from '@/lib/auth'

export default function LoginPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignUp, setIsSignUp] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        setError('')        
    
    const {error} = isSignUp
    ? await signUp(email, password)
    : await signIn(email, password)
    

    if (error) {
        setError(error.message)
    }else {
        router.push('/')
    }
    setLoading(false)

}

return (
    <main className='min-h-screen bg-gray-950 flex items-center justify-center p-8'>
        <div className='bg-gray-800 rounded-2x1 p-8 w-full max-w-md border-gray-700'>
            <h1 className='text-2x1 font-bold text-white mb-2'>
                {isSignUp ? 'Create account' : "Welcome Back"} </h1>
                <p className='text-gray-400 text-sm mb-8'>
                    {isSignUp ? "Sign up to get started " : 'Sign in to your account'}
                </p>

                {error && (
                    <div className='bg-red-900/30 border border-red-700 text-red-400 rounded-lg p-3 mb-6 text-sm'>
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <input
                    type='email'
                    placeholder='Email address'
                    value = {email}
                    onChange = {e => setEmail(e.target.value)}
                    className='bg-gray-900 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500'
                    required
                    />
                    <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='bg-gray-900 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus: border-cyan-500'
                    required
                    />
                    <button
                    type='submit'
                    disabled={loading}
                    className='bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white font-semibold rounded-lg p-3 transition-colors'>
                        {loading ? 'Please wait...' : isSignUp ? 'Create account ' : 'Sign in'}

                    </button>
                </form>
                <button
                onClick={() => setIsSignUp(!isSignUp)}
                className='w-full mt-4 text-gray-400 hover:text-white text-sm transition-colors'>
                    {isSignUp ? 'Already have an account? Sign in' : "Dont have an account? Sign Up"}
                </button>
        </div>
    </main>
)}