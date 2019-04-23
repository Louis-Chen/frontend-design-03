import React from 'react'
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
	background-color: aliceblue;
	height: 236px;
`
const Content = styled.div`
	background-color: violet;
	height: 100vh;
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
						<Tag content="Tag0" />
					</div>
					<div>
						<Tag content="Tag0" />
					</div>
					<div>
						<Tag content="Tag0" />
					</div>
					<div>
						<Tag content="Tag0" />
					</div>
					<div>
						<Tag content="Tag0" />
					</div>
					<div>
						<Tag content="Tag0" />
					</div>
					<div>
						<Tag content="Tag0" />
					</div>
					<div>
						<Tag content="Tag0" />
					</div>
					<div>
						<Tag content="Tag0" />
					</div>
				</Slider>
			</TagList>
			<PageContainer>
				<Header />
				<Content />
			</PageContainer>
		</React.Fragment>
	)
}

export default PageSearch
