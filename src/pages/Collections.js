import React from 'react'
import { times } from 'lodash'

import styled from 'styled-components'
import { space } from 'styled-system'
import { PageContainer } from '../components/Container'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

const HeaderBlock = styled.div`
	/* background-color: red; */
	position: relative;

	height: 300px;
`
const HeaderTitle = styled.h1`
	font-size:3rem;
	line-height:1;
	&:after{
		content:'${props => props.content}';
	}
`
const HeaderParagraph = styled.p`
	font-size: 1.2rem;
`
const HeaderFooter = styled.div`
	position: absolute;

	bottom: 0;
	width: 100%;
`
const HeaderItem = styled.a`
	color: #111111;

	margin-left:1rem;
	margin-right:1rem;

	${space};

	float:${props => (props.float === 'right' ? 'right' : 'left')};

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

const Collection = styled.div`
	margin-top: 1rem;
	/* background-color: aliceblue; */
	min-height: 599px;
`
const Card = styled.div`
	width: 100%;
	padding-bottom: 2rem;
`
const CardImage = styled.div`
	background-image: url(${props => props.url});
	background-position: center;

	height: 300px;
`
const CardBlock = styled.div``
const CardTitle = styled.div`
	font-size:2rem;
	font-weight:bold;
	
	&:after{
		content:'${props => props.content}';
	}
`
const CardContent = styled.p`
	color: #999999;
`

const CardTagList = styled.div``

const CardTag = styled.button`
	border:none;
	border-radius:5px;

	background-color:#f1f1f1;
	color:#999999;
	
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

const PageCollections = () => {
	return (
		<PageContainer>
			<HeaderBlock>
				<HeaderTitle content="Collections" />
				<HeaderParagraph>
					Explore the world through collections of beautiful photos free to use under
					<br />
					the <span style={{ color: '#999999' }}>Unsplash License.</span>
				</HeaderParagraph>
				<HeaderFooter>
					<HeaderItem ml={0} content="Featured" />
					<HeaderItem content="Curated" />
					<HeaderItem mr={0} float="right" content="View your collections" />
				</HeaderFooter>
			</HeaderBlock>
			<Collection>
				<Row>
					{times(9, () => {
						const numImagesAvailable = 242
						let randomImageIndex = Math.floor(Math.random() * numImagesAvailable)
						return (
							<Col lg={4} md={4} sm={2} xs={1}>
								<Card>
									<CardImage url={`https://source.unsplash.com/1600x900/?sig=${randomImageIndex}`} />
									<CardBlock>
										<CardTitle content="Moon and stars" />
										<CardContent>173 photos . Curated by Drew Wickline</CardContent>
										<CardTagList>
											<CardTag ml={0} content="Tag" />
											<CardTag content="Tag" />
											<CardTag mr={0} content="Tag" />
										</CardTagList>
									</CardBlock>
								</Card>
							</Col>
						)
					})}
				</Row>
			</Collection>
		</PageContainer>
	)
}

export default PageCollections
