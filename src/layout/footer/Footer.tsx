import styled from "styled-components"
import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"
import { theme } from "../../styles/Theme"

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
    padding: 40px 0;
`
const SocialList = styled.ul`
    display: flex;
    gap: 40px;
    margin: 30px 0;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
    letter-spacing: 0.04em;
    color: ${theme.colors.primaryFont};
`