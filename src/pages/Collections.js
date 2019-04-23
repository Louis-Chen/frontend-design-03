import React from 'react'
import styled from 'styled-components'

import { PageContainer } from '../components/Container'

const Header = styled.div`
	background-color: beige;

	height: 431px;
`
const Collection = styled.div`
	background-color: saddlebrown;
	min-height: 599px;
`

const PageCollections = () => {
	return (
		<PageContainer>
			<Header />
			<Collection />
		</PageContainer>
	)
}

export default PageCollections
