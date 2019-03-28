import React, {Suspense, Fragment} from 'react';
import ReactDOM from 'react-dom';
//style imports
import './index.css';
import Fallback from './fallback';
const App = React.lazy(() => import('./App'));

class Index extends React.PureComponent {
    render () {
        return (
            <Fragment>
                <Suspense fallback={<Fallback />}>
                    <App />
                </Suspense>
            </Fragment>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));