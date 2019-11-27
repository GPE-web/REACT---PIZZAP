import React from 'react'
import styled from 'styled-components'
import { Title } from '../Styles/title'
import { gradient } from '../Styles/colors'

const NavbarStyled = styled.div`
	background-image: ${gradient};
	padding: 1vh 10vw;
	position: fixed;
	width: 100%;
	z-index: 1000;
	display: flex;
	justify-content: space-between;
`

const Logo = styled(Title)`
	font-size: 1.4em;
	color: white;
	text-shadow: 1px 1px 2px black;
`

const UserStatus = styled.div`
	color: white;
	font-size: 1em;
	margin-right: 28vw;
	padding-top: 0.7vh;
`

const LoginButton = styled.span`
	cursor: pointer;
`

export function Navbar({ login, loggedIn, logout }) {
	return (
		<NavbarStyled>
			<Logo>
				Sliceline{' '}
				<span role='img' aria-label='pizza slice'>
					🍕
				</span>
			</Logo>
			<UserStatus>
				{loggedIn !== 'loading' ? (
					<>
						{loggedIn ? 'Logged in.' : ''}
						{loggedIn ? (
							<LoginButton onClick={logout}> Log out </LoginButton>
						) : (
							<LoginButton onClick={login}> Log in / Sign up </LoginButton>
						)}
					</>
				) : (
					'loading...'
				)}
			</UserStatus>
		</NavbarStyled>
	)
}
