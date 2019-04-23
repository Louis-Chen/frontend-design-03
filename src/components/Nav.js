import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import avatar from '../assets/avatar.svg'

const Nav = styled.div`
	display: flex;
	align-items: center;
	box-sizing: border-box;

	/* background-color: green; */

	height: 80px;

	${space};
`
const NavItemGroup = styled.div`
	display: flex;

	margin-left: 2rem;
	margin-right: 2rem;
`
const NavItem = styled.div`
	color: #111111;


	padding-left:1rem;
	padding-right:1rem;

	
	&:hover {
	 cursor: pointer; 
	}
	&:active {
		color: #f1f1f1;
	}
	&:after{
		content:'${props => props.content}';
	}
`

const Search = styled.div`
	display: flex;

	border: none;
	border-radius: 50px;

	background-color: #f1f1f1;
	box-sizing: border-box;

	margin-left: 1rem;
	margin-right: 1rem;

	height: 50px;
	width: 100%;
`

const SearchLabel = styled.div`
	border-radius: 50px 0 0 50px;

	background-color: #f1f1f1;

	width: 50px;
	height: 50px;

	line-height: 50px;
	text-align: center;
`
const SearchInput = styled.input`
	width: 100%;
	height: 50px;

	background-color: #f1f1f1;

	border: none;
	border-radius: 0px 40px 40px 0px;

	font-size: 20px;

	&:focus {
		outline: none;
	}
`

const ProfileGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	width: 500px;

	margin-left: 1rem;
	margin-right: 1rem;
`

const ProfileNotify = styled.button`
	border: none;
	background: none;
`

const ProfileSubmit = styled.button`
	border-radius: 11px;
	border:2px solid #f1f1f1;
	
	color:#999999;

	padding-left:1rem;
	padding-right:1rem;

	font-size:20px;
	height:40px;

	&:after{
		content:'${props => props.content}';
	}
`
const ProfileAvatar = styled.img`
	border-radius: 50%;

	height: 2rem;
	width: 2rem;
`
const NavMenu = () => {
	return (
		<Nav mt={1} mr={3} ml={3}>
			<label>
				<i className="fas fa-camera fa-3x" />
			</label>
			<Search>
				<SearchLabel>
					<i className="fas fa-search" style={{ color: '#95989A' }} />
				</SearchLabel>
				<SearchInput placeholder="Search free high-resolution photos" />
			</Search>
			<NavItemGroup>
				<NavItem content="Home" />
				<NavItem content="Collections" />
			</NavItemGroup>
			<ProfileGroup>
				<ProfileSubmit content="Submit a photo" />
				<ProfileNotify>
					<i className="fas fa-bell" style={{ color: '#95989A', fontSize: '24px' }} />
				</ProfileNotify>

				<ProfileAvatar src={avatar} />
			</ProfileGroup>
		</Nav>
	)
}

export default NavMenu
