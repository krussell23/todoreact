import { AppBar } from "components/appbar"
import { GitHubProvider, GoogleProvider } from "components/authentication/providers"
import { Title } from "ui/title"
import { Spacer } from "ui/spacers"
import { UserLogin } from "components/authentication/user-login"
import { Legal, HighLight } from "ui/legal"
import { PageLayout, PageHeader, PageFooter, PageBody } from 'layouts/loginpage'

function signup() {

    return (
        <>
            <AppBar />
            <PageLayout>
                <PageHeader>
                    <Title>Account SignUp</Title>
                </PageHeader>
                <PageBody>
                    <GoogleProvider style={{ marginBottom: "1.5rem" }}>With Google</GoogleProvider>
                    <GitHubProvider>With GitHub</GitHubProvider>
                    <Spacer className="spacing" >OR</Spacer>
                    <UserLogin />
                </PageBody>
                <PageFooter>
                    <Legal>Legal Stuff  <HighLight>terms and conditions</HighLight></Legal>
                </PageFooter>

            </PageLayout>
        </>
    )
}



export default signup;