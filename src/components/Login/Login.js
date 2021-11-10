import "./Login.css"

import { loginUrl } from "../../hooks/useLogin"

export default function Login() {
    return (
        <div className="login">
            {/* <img 
            src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
            alt="spotify-logo"
            /> */}
            <a href={loginUrl}>Login</a>
            
        </div>
    )
}