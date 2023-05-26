import { useState } from "react";

function Input({ setUserData }) {
    const [username, setUsername] = useState('')

    const handelchange = (e) => {
        setUsername(e.target.value)
        

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`https://api.github.com/users/${username}`)
        const data = await res.json()
        setUserData(data)
        setUsername('')
    }
    const clear = () => {
        setUserData(undefined)
        setUsername('')
        }
        
    
    return(
        <div>
           <form onSubmit={handleSubmit}>
                <input value={username} onChange={handelchange} placeholder="username" />
                <input type='submit'/>
           </form>
           <button onClick={clear}>Clear</button>
        </div>
    )
}

export default Input