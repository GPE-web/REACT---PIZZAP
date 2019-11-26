import styled from 'styled-components'
import { Title } from '../Styles/title'

export const FoodGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1vw;
`

export const FoodLabel = styled(Title)`
	position: absolute;
	background-color: white;
	padding: 5px;
	border-style: solid;
	border-width: 1px;
`

export const Food = styled.div`
	height: 20vh;
	padding: 1.5vh;
	background-image: ${({ img }) => `url(${img})`};
	background-position: center;
	background-size: cover;
	border-radius: 5px;
	margin-top: 1px;
	transition-property: box-shadow margin-top filter;
	transition-duration: 0.15s;
	box-shadow: 0px 0px 5px 0px grey;
	&:hover {
		cursor: pointer;
		filter: contrast(110%);
		margin-top: 0px;
		margin-bottom: 1px;
		box-shadow: 0px 0px 10px 0px grey;
	}
`
