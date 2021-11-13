import { useEffect, useState } from "react";
import { accessToken, logout } from "../../config"

import { Wrapper, Content } from "./Login.styles.js"

export default function Login() {
    const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

    return (
        
        <Wrapper>
            <Content>
            {!token ? (
            <a href="http://localhost:3001/login">Login</a>
            ) : (
                <button onClick={logout}>Log Out</button>
              )}
              </Content>
        </Wrapper>
    )
}