import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
//style imports
import './index.css';
import Fallback from './fallback';
const App = React.lazy(() => import('./App'));

const Index  = () => {
    return (
        <React.Fragment>
            <Suspense fallback={<Fallback />}>
                <App />
            </Suspense>
        </React.Fragment>
    );
}

ReactDOM.render(<Index />, document.getElementById('root'));