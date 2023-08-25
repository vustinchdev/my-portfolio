import styled from "styled-components"
import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"

//test commit
export const Footer = () => {
    return (
        <StyledFooter >
            <FlexWrapper direction="column" align="center">
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="mail" width="39" height="38" viewBox="0 0 39 38" />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="linkedin" width="39" height="38" viewBox="0 0 39 38" />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="github" width="39" height="38" viewBox="0 0 39 38" />
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Vadim Ustinchik, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #93f0b3;
    min-height: 20vh;
`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    
`

const Copyright = styled.small`
    
`