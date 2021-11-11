import { useEffect, useState } from "react";
import { accessToken } from "../../hooks/getToken"

import "./Login.css"

// import { loginUrl } from "../../hooks/useLogin"

export default function Login() {
    const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

    return (
        
            
          
        <div className="login">
            {!token ? (
            <a href="http://localhost:3001/login">Login</a>
            ) : (
                <h1>Logged in!</h1>
              )}
        </div>
    )
}