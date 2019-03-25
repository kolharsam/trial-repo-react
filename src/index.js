import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
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

export default Index;

ReactDOM.render(<Index />, document.getElementById('root'));
