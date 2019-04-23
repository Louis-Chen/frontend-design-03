import React from 'react'
import styled from 'styled-components'
import { PageContainer } from '../components/Container'

const Hero = styled.div`
	background-color: gainsboro;
	height: 600px;
`

const Content = styled.div`
	background-color: cadetblue;
	padding-top: 40px;
	height: 1200px;
`

const PageHome = () => {
	return (
		<React.Fragment>
			<Hero />
			<PageContainer>
				<Content />
			</PageContainer>
		</React.Fragment>
	)
}

export default PageHome
