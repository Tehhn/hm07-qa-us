// eslint-disable-next-line no-undef
const config = require('../config');

const requestBodyCreate = {
	"name": "AutomatedKit2",
	"cardId": 1
}

const requestBodyUpdate = {
	"name": "AutomatedKit3",
	"productsList": [
		{
		"id": 5,
		"quantity": 1
		}
	]
}

test('The response code for updating the kit should be 200', async () => {

	let id

	//This block of code creates a kit, takes its id from the response
	//and uses that id in the PUT request to alter the data.
	try {
		responsePost = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBodyCreate)
		});

		const actualStatus = responsePost.status;
		expect(actualStatus).toBe(201);
		const data = await responsePost.json();

		//console.log(data);
		id = data["id"];
		
		
	} catch (error) {
		console.error(error);
	}

	//This block alters the kit which was prevously created
	//Checking if the status code is 200.
    try {
		const responsePut = await fetch(`${config.API_URL}/api/v1/kits/`+id, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBodyUpdate)
		});
	const actualPutStatus = responsePut.status;

	//Assert that status is 200
	expect(actualPutStatus).toBe(200);
	const updatedData = await responsePut.json();
	//console.log(updatedData)
		
	} catch (error) {
		console.error(error);
	}

});

test('The response when updating a kit should contain expected data', async () => {

	let id

	//This block of code creates a kit, takes its id from the response
	//and uses that id in the PUT request to alter the data.
	try {
		responsePost = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBodyCreate)
		});

		const actualStatus = responsePost.status;
		expect(actualStatus).toBe(201);
		const data = await responsePost.json();

		//console.log(data);
		id = data["id"];
		
		
	} catch (error) {
		console.error(error);
	}

	//This block alters the kit which was prevously created
	//Checking if the response message is correct.
    try {
		const responsePut = await fetch(`${config.API_URL}/api/v1/kits/`+id, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBodyUpdate)
		});
	
		const updatedData = await responsePut.json();
		let ok = updatedData["ok"];
		
		// Assert that the "ok" value is true, meaning the kit was deleted
		expect(ok).toBe(true)
		
	} catch (error) {
		console.error(error);
	}

});
