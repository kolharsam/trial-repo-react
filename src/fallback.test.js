import React from 'react';
import ReactDOM from 'react-dom';
import Fallback from './fallback';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <Fallback /> , div);
    ReactDOM.unmountComponentAtNode(div);
});
