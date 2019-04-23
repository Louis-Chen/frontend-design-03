import React from 'react'
import { times } from 'lodash'
import styled from 'styled-components'
import { space } from 'styled-system'

import { PageContainer } from '../components/Container'

const Hero = styled.div`
	background-image: url('http://bit.ly/2viTfiQ');
	height: 600px;

	display: flex;
	justify-content: center;
	align-items: center;
`

const HeroContent = styled.div`
	color: #ffffff;
	width: 800px;
`

const HeroTitle = styled.div`
	font-size:3rem;
	font-weight:bold;

	&:after{
		content:'${props => props.content}';
	}
`

const HeroPragraph = styled.p`
	color: #ffffff;
`

const HeroSearch = styled.div`
	display: flex;

	border: none;
	border-radius: 10px;

	background-color: #f1f1f1;
	box-sizing: border-box;

	height: 60px;
	width: 100%;
`

const HeroSearchLabel = styled.div`
	border-radius: 10px

	background-color: #f1f1f1;

	width: 60px;
	height: 60px;

	line-height: 60px;
	text-align: center;
`
const HeroSearchInput = styled.input`
	width: 100%;
	height: 60px;

	background-color: #f1f1f1;

	border: none;
	border-radius: 10px

	font-size: 24px;

	&:focus {
		outline: none;
	}
`
const HeroSearchButton = styled.div`
	border-radius: 10px

	background-color: #f1f1f1;

	height: 60px;
	line-height: 60px;
	text-align: center;

	margin-right:0.1rem;
`

const HeroSearchSubmit = styled.button`
	border-radius: 11px;
	border:1px solid #999999;

	background-color: #f1f1f1;

	color:#999999;

	padding-left:1rem;
	padding-right:1rem;
	
	margin-right:0.1rem;

	font-size:24px;	
	height:50px;

	outline:none;

	&:hover {
	 cursor: pointer; 
	}

	&:after{
		content:'${props => props.content}';
	}
`
const Content = styled.div`
	-moz-column-width: 16em;
	-webkit-column-width: 16em;
	-moz-column-gap: 1em;
	-webkit-column-gap: 1em;
	${space}
`

const Card = styled.div`
	display: inline-block;
	width: 100%;
`

const Filter = styled.div`
	line-height: 60px;
	height: 60px;

	${space}
`
const FilterItem = styled.a`

	margin-left:0.5rem;
	margin-right:0.5rem;

	float:${props => (props.float === 'right' ? 'right' : 'left')};
	
	${space}
	
	&:after{
		content:'${props => props.content}';
	}
	&:hover{
		color:#e1e1e1;
		cursor:pointer;
	}
	&:focus{
		outline:none;
	}
`
const PageHome = () => {
	return (
		<React.Fragment>
			<Hero>
				<HeroContent>
					<HeroTitle content="Unsplash" />
					<HeroPragraph>
						Beautiful, free photos.
						<br />
						Gifted by the world’s most generous community of photographers.
					</HeroPragraph>
					<HeroSearch>
						<HeroSearchLabel>
							<i className="fas fa-search" style={{ color: '#95989A' }} />
						</HeroSearchLabel>
						<HeroSearchInput placeholder="Search free high-resolution photos" />
						<HeroSearchButton>
							<HeroSearchSubmit content="Search" />
						</HeroSearchButton>
					</HeroSearch>
					<HeroPragraph>
						<span style={{ color: '#999999' }}>Trending searches:</span>business, computer, nature, love, house
					</HeroPragraph>
				</HeroContent>
			</Hero>

			<PageContainer>
				<Filter mt={4}>
					<FilterItem content="Trending" />
					<FilterItem content="New" />
					<FilterItem content="Following" />

					<FilterItem float="right">
						<i class="fas fa-th-list" />
					</FilterItem>
					<FilterItem float="right">
						<i class="fas fa-th" />
					</FilterItem>
				</Filter>
				<Content ml={0} mr={0} mt={4}>
					{times(30, (i, key) => {
						const numImagesAvailable = 242
						let randomImageIndex = Math.floor(Math.random() * numImagesAvailable)
						return (
							<Card>
								<img
									style={{ width: '100%', marginTop: '8px', verticalAlign: 'middle' }}
									src={`https://source.unsplash.com/random/?sig=${randomImageIndex}`}
									alt={key}
								/>
							</Card>
						)
					})}
				</Content>
			</PageContainer>
		</React.Fragment>
	)
}

export default PageHome
