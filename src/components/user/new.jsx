import React, {useState, useRef, useEffect} from 'react'

const SignUp = () => {
    const [user, setUser] = useState({email: '', password: ''})
    const inputRef = useRef(null);

    useEffect( () => {
        console.log(user.email, user.password)
    }, [user])

    useEffect( () => {
        inputRef.current.focus()
    }, [])

    const onAddUser = (e) => {
        e.preventDefault()
        console.log(user)
    }

    return (

        <div>
            <h1> Sign Up </h1>
            <form onSubmit={onAddUser}>
                <label name="email">
                    Email:
                    <input ref={inputRef} name="name" type="text" value={user.email} onChange={e => {setUser({...user, email: e.target.value})}}/>
                </label><br />
                <label name="password">
                    Password:
                    <input name="password" type="password" value={user.password} onChange={e => {setUser({...user, password: e.target.value})}}/>
                </label><br />
                <input type="submit" value="Create Account"/>
            </form>
        </div>
    )
}

export default SignUp