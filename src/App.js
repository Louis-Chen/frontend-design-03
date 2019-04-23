import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { space, color, fontSize, width, fontWeight, lineHeight } from 'styled-system'

import PageCollections from './pages/Collections'
import { Nav } from './components/Nav'

const Style = createGlobalStyle`
  * { box-sizing: border-box; }
  body{ margin:0; }
`

const theme = {
	fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
	space: [
		// margin and padding
		0,
		4,
		8,
		16,
		32,
		64,
		128,
		256
	],
	colors: {
		blackg: '#111111',
		gray: '#F1F1F1'
	}
}

const Root = styled.div`
	font-family: system-ui, sans-serif, 'SF UI Display';
	line-height: 1.5;
`

const PageContainer = styled.div`
	padding-left: 80px;
	padding-right: 80px;
`

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Root>
				<Style />
				<Nav />
				<PageContainer>
					<PageCollections />
				</PageContainer>
			</Root>
		</ThemeProvider>
	)
}

export default App
