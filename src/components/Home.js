import React from 'react';
import {  } from 'react-router-dom';
import { Collapsible, CollapsibleItem } from 'react-materialize';


const Home = props => (
	<div>
        <Collapsible>
            <CollapsibleItem header="Better safe than sorry. That's my motto." icon="filter_drama">
            Better safe than sorry. That's my motto.
            </CollapsibleItem>
            <CollapsibleItem header="Yeah, you do seem to have a little 'shit creek' ac…" icon="place">
            Yeah, you do seem to have a little 'shit creek' action going.
            </CollapsibleItem>
            <CollapsibleItem header="You know, FYI, you can buy a paddle. Did you not p…" icon="whatshot">
            You know, FYI, you can buy a paddle. Did you not plan for this contingency?
            </CollapsibleItem>
        </Collapsible>
	</div>
)

export default Home;
