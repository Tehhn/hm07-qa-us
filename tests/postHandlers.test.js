// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "name": "AutomatedKit2",
	"cardId": 1
	
}
test('Creating a Kit should return status 201 created', async () => {
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
		
		
	} catch (error) {
		console.error(error);
	}

	expect(actualStatus).toBe(201);
	
});

test('Response when creating a kit should provide correct data back', async () => {
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		data = await response.json();
		
	} catch (error) {
		console.error(error);
	}
	

	
	const name = data["name"];
	const id = data["id"];
	const cardId = data["card"]["id"];
	const productsCount = data["productsCount"];

	//Assert that name from the response is the name sent in request
	//Assert that cardId from the response is the cardId sent in reqest
	//Assert that id is not a NULL value
	//Aseert that productsCount is 0 since it is the new kit.

	expect(name).toEqual(requestBody.name);
	expect(cardId).toEqual(requestBody.cardId);
	expect(id).not.toBe(null);
	expect(productsCount).toBe(0);
	
	//console.log(name, id);
	
	
});
