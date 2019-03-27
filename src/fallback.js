import React from 'react';

class Fallback extends React.PureComponent {
    render () {
        return (
            <React.Fragment>
                <div style={{
                        display: 'grid', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        fontWeight: 800,
                        height: '100vh',
                        width: '100%'
                        fontSize: '32px'
                    }}
                >
                    Loading...
                </div>
            </React.Fragment>
        );
    }
}

export default Fallback;