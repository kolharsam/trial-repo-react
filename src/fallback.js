import React from 'react';

class Fallback extends React.PureComponent {
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

export default Fallback;