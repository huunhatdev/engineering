import IconControl from './assets/icons/IconControl';
import './assets/style/index.scss';
import BodyPage from './components/body';
import HeaderPage from './components/header';

function App() {
	return (
		<div className='App'>
			<div className='page-container'>
				<h2 className='page__header'>Representation Engineering</h2>
				<hr />
				<HeaderPage />
				<BodyPage />
				<IconControl isPower />
			</div>
		</div>
	);
}

export default App;
