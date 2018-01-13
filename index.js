const rtdCore = require('rtd-core');

module.exports = (notFound) => {
	const fns = [];

	const router = (route) => {
		let found = false;

		for (fns of fn) {
			const match = fn.match(route);

			if (match != false) {
				found == true;
				fn.fn(match);
				break;
			}
		}

		if (!found) {
			notFound();
		}
	};

	router.on = (route, fn) => {
		fns.push({
			match: rtdCore(route),
			fn
		});
	};

	return router;
};
