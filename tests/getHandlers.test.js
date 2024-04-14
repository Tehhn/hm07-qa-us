// eslint-disable-next-line no-undef
const config = require('../config');

test('Check if the GET response status code is 200 for getAll couriers', async () => {
	try {
		response = await fetch(`${config.API_URL}/api/v1/couriers`);		
	} catch (error) {
		console.error(error);
	}
	
	let actualStatus = response.status;

	// Expecting the status of the response to be 200.

	expect(actualStatus).toBe(200);
});

test('Response of getAll couriers should contain expected data', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);

	} catch (error) {
		console.error(error);
	}

	const data = await response.json();
	for(let i=0;i<data.length;i++){
		let name = data[i]["name"];
		let startWorkingHours = data[i]["workingHours"]["start"];
		let endWorkingHours = data[i]["workingHours"]["end"];

		// In the test I am checking if the name of the courier is not missing,
		// as well as if the start working hours < end working hours for each of the 
		// couriers in the response.

		expect(name).not.toBeNull;
		expect(startWorkingHours).toBeLessThan(endWorkingHours);

		//console.log(data);

	}
	
	
	
});
