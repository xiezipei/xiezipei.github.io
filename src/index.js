import Print from './print';

async function getComponent() {
	try {
		const { default: _ } = await import('lodash');
		const element = document.createElement('div');
		element.innerHTML = _.join(['Hello', 'webpack'], ' ');

		const btn = document.createElement('button');
		btn.innerHTML = 'Click me and check console!';
		btn.onclick = Print.bind(null, 'Hello webpack!');
		element.appendChild(btn);

		return element;
	} catch (error) {
		return 'An error occured while loading the component';
	}
}

getComponent().then(component => {
	document.body.appendChild(component);
});

if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting the update printMe module!');
		printMe();
	});
}
