// eslint-disable-next-line no-undef
const config = require('../config');

test('Check if the GET response status code is 200 for getAll couriers', async () => {
	try {
		response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualStatus = response.status;		
	} catch (error) {
		console.error(error);
	}
	

	// Expecting the status of the response to be 200.

	expect(actualStatus).toBe(200);
});

test('Response of getAll couriers should contain expected data', async () => {
	let name;
	let startWorkingHours;
	let endWorkingHours;
	let data;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		data = await response.json();

	} catch (error) {
		console.error(error);
	}

	
	
	expect(data.length).toBeGreaterThan(0);

	for(let i=0;i<data.length;i++){
		
		name = data[i]["name"];
		startWorkingHours = data[i]["workingHours"]["start"];
		endWorkingHours = data[i]["workingHours"]["end"];

		// In the test I am checking if the name of the courier is not missing,
		// as well as if the start working hours < end working hours for each of the 
		// couriers in the response.

		expect(name).not.toBeNull;
		expect(startWorkingHours).toBeLessThan(endWorkingHours);

		//console.log(data);

	}
	
	
	
});
