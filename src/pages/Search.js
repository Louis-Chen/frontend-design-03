import React from 'react'
import styled from 'styled-components'

import { PageContainer } from '../components/Container'

const TagList = styled.div`
	background-color: firebrick;
	height: 80px;
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
			<TagList />
			<PageContainer>
				<Header />
				<Content />
			</PageContainer>
		</React.Fragment>
	)
}

export default PageSearch
