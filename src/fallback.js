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