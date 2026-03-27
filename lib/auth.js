import { supabase } from "./supabase"

// Here were signing in a new user
export async function signUp(email, password) {
    const {data, error} = await supabase.auth.signUp({
        email,
        password
    })
    return {data, error}   
}

export async function signIn(email, password) {
    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    return {data, error}
}

//Logout
export async function signOut() {
    const {error} = await supabase.auth.signOut()
    return {error}
}

export async function getUser() {
    const {data: { user } } = await supabase.auth.getUser()
    return user
}
