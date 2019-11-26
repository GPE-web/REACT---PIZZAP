import React from 'react'
import styled from 'styled-components'
import { Title } from '../Styles/title'

const BannerStyled = styled.div`
	height: 25vh;
	width: calc(100% - 340px);
	background-image: url('img/pizzaBanner-min.jpg');
	background-position: center;
	background-size: cover;
	filter: contrast(80%);
`
const BannerTextStyled = styled(Title)`
	font-size: 2em;
	display: flex;
	color: white;
	position: absolute;
	top: 15%;
	left: 37.5%;
	transform: translate(-50%, -50%);
	text-shadow: 0px 5px 30px black;
	padding: 0px 50px;
	z-index: 0;
`

const BannerTextString = `Votre PIZZA en 30 minutes`

export function Banner() {
	return (
		<>
			<BannerStyled />
			<BannerTextStyled>{BannerTextString}</BannerTextStyled>
		</>
	)
}
