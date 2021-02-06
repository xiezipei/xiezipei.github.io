import _ from 'lodash';

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/service-worker.js').then(registration => {
			console.log('SW registered: ', registration);
		}).catch(registrationError => {
			console.log('SW registration failed: ', registrationError);
		});
	});
}

function component() {
	const element = document.createElement('div');
	const button = document.createElement('button');
	const br = document.createElement('br');

	button.innerHTML = 'Click me and look at the console!';
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.appendChild(br);
	element.appendChild(button);

	button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
		const print = module.default;
		print();
	});

	return element;
}

document.body.appendChild(component());