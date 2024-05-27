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
		actualStatus = await responsePost.status;	
		data = await responsePost.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualStatus).toBe(201);
	
	//console.log(data);
	id = data["id"];

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
		actualPutStatus = await responsePut.status;
		updatedData = await responsePut.json();

		
		
	} catch (error) {
		console.error(error);
	}

	//Assert that status is 200
	expect(actualPutStatus).toBe(200);
		
	//console.log(updatedData)
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

		actualStatus = await responsePost.status;
		data = await responsePost.json();

	} catch (error) {
		console.error(error);
	}
	
	expect(actualStatus).toBe(201);
	

	//console.log(data);
	id = data["id"];
	

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
	
		updatedData = await responsePut.json();
	
		
	} catch (error) {
		console.error(error);
	}

	let ok = updatedData["ok"];
		
	// Assert that the "ok" value is true, meaning the kit was deleted
	expect(ok).toBe(true)

});
