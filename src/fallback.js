import React from 'react';

export default class Fallback extends React.PureComponent {
    render () {
        return (
            <React.Fragment>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800}}>
                    Loading...
                </div>
            </React.Fragment>
        );
    }
}