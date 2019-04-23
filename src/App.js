import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import { Nav } from './components/Nav'

import PageCollections from './pages/Collections'
import PageSearch from './pages/Search'
import PageHome from './pages/Home';

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

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Root>
				<Style />
				<Nav />
				<Router>
					<Switch>
						<Route exact path="/" component={PageHome} />
						<Route path="/search" component={PageSearch} />
						<Route path="/collections" component={PageCollections} />
					</Switch>
				</Router>
			</Root>
		</ThemeProvider>
	)
}

export default App
