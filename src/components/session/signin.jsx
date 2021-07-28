import React, {useState, useEffect, useRef} from 'react'


const Signin = () => {
    const [user, setUser] = useState({email: '', password: ''})
    const inputRef = useRef(null);

    useEffect( () => {
        console.log(user.email, user.password)
    }, [user])

    useEffect( () => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <h1> Login </h1>
            <form>
                <label name="email">
                    Name:
                    <input ref={inputRef} name="name" type="text" value={user.name} onChange={e => {setUser({...user, name: e.target.value})}}/>
                </label><br />
                <label name="password">
                    Phone:
                    <input name="password" type="password" value={user.password} onChange={e => {setUser({...user, phone: e.target.value})}}/>
                </label><br />
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}
export default Signin