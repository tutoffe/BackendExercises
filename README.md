# BackendExercises
Endpoints for a phone app with REST APIs

Install the package via Node.js

In the cmd execute: node server.js

The catalog is retrieve in localhost:3000/mobiles

To add an order with a POST in localhost:3000/orders with the following JSON structure:

{
	"name":"Test",
	"surname":"TestSN",
	"email":"test@test.com",
	"phonesIds":"1,2,2"
}

There are only three phones in the catalog with the Ids 1 to 3. 
To see the orders, go to localhost:3000/orders