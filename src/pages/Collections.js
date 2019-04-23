import React from 'react'
import styled from 'styled-components'

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
		<React.Fragment>
			<Header />
			<Collection />
		</React.Fragment>
	)
}

export default PageCollections
