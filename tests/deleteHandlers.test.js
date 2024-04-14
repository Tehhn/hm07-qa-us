// eslint-disable-next-line no-undef
const config = require('../config');

const requestBodyCreate = {
	"name": "AutomatedKit2",
	"cardId": 1
}

test('Response code for deleting the kit should be 200', async () => {
	let id;
	// This block of code serves to create a new kit, take the id of the created kit
	// from the reponse, and then use that id to delete the kit.
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
		id = data["id"];
		console.log('id ',id)
		//console.log(data);
		
		
	} catch (error) {
		console.error(error);
	}

	
    try {
		const responseDelete = await fetch(`${config.API_URL}/api/v1/kits/`+id, {
			method: 'DELETE',
		});
	const actualDeleteStatus = responseDelete.status;

	//A check to make sure that the status code returned is 200
	expect(actualDeleteStatus).toBe(200);
		
	} catch (error) {
		console.error(error);
	}
	
});

test('Response for Deleting a kit should provide correct data back ', async () => {

	let id;
	// This block of code serves to create a new kit, take the id of the created kit
	// from the reponse, and then use that id to delete the kit.
	try {
		responsePost = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBodyCreate)
		});

		
		
		const data = await responsePost.json();
		id = data["id"];
		console.log('id ',id)
		//console.log(data);
		
		let actualStatus = responsePost.status;
		//This is just a check to see if the kit was created.
		expect(actualStatus).toBe(201);
		
	} catch (error) {
		console.error(error);
	}

	

	// This block of code tests the deleting of the kit, id used is the
	// one that was just created previously.
    try {
		const responseDelete = await fetch(`${config.API_URL}/api/v1/kits/`+id, {
			method: 'DELETE',
		});
	
		
		const data = await responseDelete.json();
		const ok = data["ok"];
		
		//This is a check that the response body of the DELETE method returns 
		//correct data.
		expect(ok).toBe(true);
		
	} catch (error) {
		console.error(error);
	}
	
});

