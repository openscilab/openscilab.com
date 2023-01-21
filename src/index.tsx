import App from './App/App';
import ReactDOM from 'react-dom';
import './Assets/scss/index.scss';
import Store from './Tools/Store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

const app = (
	<ErrorBoundary>
		<BrowserRouter>
			<Store>
				<App />
			</Store>
		</BrowserRouter>
	</ErrorBoundary>
);

ReactDOM.render(app, document.querySelector('#root'));
reportWebVitals();
