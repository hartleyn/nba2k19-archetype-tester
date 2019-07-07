import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home'
import BuildSelector from './BuildSelector';
import Animations from './Animations';
import Playground from './Playground';


const Main = () => (
	<main className='mainApp'>
		<Switch>
			<Route exact path='/' component={BuildSelector} />
			<Route exact path='/animate' component={Animations} />
			<Route exact path='/playground' component={Playground} />
		</Switch>
	</main>
)

export default Main;
