import Loader from "../Loader/index.js"
import HeadingTitle from "../HeadingTitle/index.js"

import { PageWrapper, LoginWrapper, Content } from "./Login.styles.js"

export default function Login() {
  

    return (
    <PageWrapper>
        <div className="title">
        <HeadingTitle title={"Mixed Tape"}/>
        </div>
      <Loader/>
        <LoginWrapper>
            <Content>
            <a href="http://localhost:3001/login">Login</a>
            </Content>
        </LoginWrapper>
    </PageWrapper>
    )
}