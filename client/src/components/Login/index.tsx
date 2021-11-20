import Loader from "../Loader/index"
import HeadingTitle from "../HeadingTitle/index"

import { PageWrapper, LoginWrapper, Content } from "./Login.styles.js"

export default function Login() {
   
    const LOGIN_URI =
    process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3001/login'
    : 'https://mixed-tape-app.herokuapp.com/login';

    return (
    <PageWrapper>
        <div className="title">
        <HeadingTitle title={"Mixed Tape"}/>
        </div>
      <Loader/>
        <LoginWrapper>
            <Content>
            <a href={LOGIN_URI}>Login</a>
            </Content>
        </LoginWrapper>
    </PageWrapper>
    )
}