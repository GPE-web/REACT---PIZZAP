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
`

const Logo = styled(Title)`
	font-size: 1.4em;
	color: white;
	text-shadow: 1px 1px 2px black;
`

export function Navbar() {
	return (
		<NavbarStyled>
			<Logo>
				PizzApp{' '}
				<span role='img' aria-label='pizza slice'>
					🍕
				</span>
			</Logo>
		</NavbarStyled>
	)
}
