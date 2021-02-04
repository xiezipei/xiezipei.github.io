async function getComponent() {
	try {
		const { default: _ } = await import('lodash');
		const element = document.createElement('div');
		element.innerHTML = _.join(['Hello', 'webpack'], ' ');
		return element;
	} catch (error) {
		return 'An error occured while loading the component';
	}
}

getComponent().then(component => {
	document.body.appendChild(component);
});
