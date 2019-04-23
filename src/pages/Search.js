import React from 'react'
import { times } from 'lodash'
import styled from 'styled-components'
import { space } from 'styled-system'

import { PageContainer } from '../components/Container'
import Slider from 'react-slick'

const TagList = styled.div``

const Tag = styled.div`
	border:none;
	border-radius:5px;

	background-color:#f1f1f1;
	color:#999999;

	text-align:center;
	
	font-size:1.2rem;

	padding-top:0.5rem;
	padding-bottom:0.5rem;
	padding-left:1.5rem;
	padding-right:1.5rem;

	margin-left:0.5rem;
	margin-right:0.5rem;

	${space}
	
	&:after{
		content:'${props => props.content}';
	}
	&:hover{
		background-color:#e1e1e1;
		cursor:pointer;
	}
	&:focus{
		outline:none;
	}
`

const Header = styled.div`
	position: relative;
	/* background-color: aliceblue; */
	height: 160px;
`
const HeaderTitle = styled.h1`
	font-size: 3rem;
	&:after{
		content:'${props => props.content}';
	}
`
const HeaderFooter = styled.div`
	display: flex;
	position: absolute;
	bottom: 0;
`
const HeaderItem = styled.a`
	margin-left:1rem;
	margin-right:1rem;

	${space}
	
	color:#111111;

	&:hover{	
		color: #999999;
		cursor:pointer;
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
const PageSearch = () => {
	return (
		<React.Fragment>
			<TagList>
				<Slider
					breakpoints={[
						{
							breakpoint: 500,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 4
							}
						}
					]}
					infinite
					slidesToScroll={8}
					slidesToShow={8}
				>
					<div>
						<Tag content="Tag0" />
					</div>
					<div>
						<Tag content="Tag1" />
					</div>
					<div>
						<Tag content="Tag2" />
					</div>
					<div>
						<Tag content="Tag3" />
					</div>
					<div>
						<Tag content="Tag4" />
					</div>
					<div>
						<Tag content="Tag5" />
					</div>
					<div>
						<Tag content="Tag6" />
					</div>
					<div>
						<Tag content="Tag7" />
					</div>
					<div>
						<Tag content="Tag8" />
					</div>
					<div>
						<Tag content="Tag10" />
					</div>
				</Slider>
			</TagList>
			<PageContainer>
				<Header>
					<HeaderTitle content="Search Tag" />
					<HeaderFooter>
						<HeaderItem ml={0} content="505 Photos" />
						<HeaderItem content="505 Photos" />
						<HeaderItem content="505 Photos" />
					</HeaderFooter>
				</Header>
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

export default PageSearch
