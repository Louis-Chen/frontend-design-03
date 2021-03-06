import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import NavMenu from './components/Nav'

import PageCollections from './pages/Collections'
import PageSearch from './pages/Search'
import PageHome from './pages/Home'

const Style = createGlobalStyle`
  * { box-sizing: border-box; }
  body { 
	@import "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css";
	@import "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css";

	margin:0; 
  }
`

const theme = {
	fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
	flexboxgrid: {
		// Defaults
		gridSize: 12, // columns
		gutterWidth: 1, // rem
		outerMargin: 2, // rem
		mediaQuery: 'only screen',
		container: {
			sm: 46, // rem
			md: 61, // rem
			lg: 76 // rem
		},
		breakpoints: {
			xs: 0, // em
			sm: 48, // em
			md: 64, // em
			lg: 75 // em
		}
	},
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
	font-family: 'SF UI Display', system-ui, sans-serif;
	line-height: 1.5;
`

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Root>
				<Style />
				<Router history={createBrowserHistory}>
					<NavMenu />

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
