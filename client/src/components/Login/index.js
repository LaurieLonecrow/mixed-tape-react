import Loader from "../Loader/Loader.js"

import { PageWrapper, LoginWrapper, Content } from "./Login.styles.js"

export default function Login() {
  

    return (
      <PageWrapper>
      <Loader/>
        <LoginWrapper>
            <Content>
            <a href="http://localhost:3001/login">Login</a>
            </Content>
        </LoginWrapper>
        </PageWrapper>
    )
}