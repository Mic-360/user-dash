# Analytics Functionality

This project has everything you need! Just run the package scripts and test it.

## Usage

1. Run the project by executing `npm start` or `npm test`.
2. Access the application at `http://localhost:3000` or whatever port you have in your .env file.

## Server.js Features

This server.js file is a Node.js server that uses Express.js for routing and Mongoose for interacting with MongoDB. Here are the main features:

Update Product Endpoint (`PUT /product/:id`)
This endpoint allows you to update a product in the database using its `product_id`.

When you send a PUT request to /product/:id (where :id is the `product_id`), the server will:

Find the product with the given `product_id`.
Update the product with the data in the request body.
Return the updated product in the response.
If the product is not found, a 404 status code and a message are sent back. If an error occurs, a `500 status code` and a message are sent back.

The `findOneAndUpdate` method is used with the `new: true`, `upsert: true`, and `runValidators: true options`. This means that if the product doesn't exist, a new one will be created, and the updated (or newly created) product will be returned in the response. The update will also respect validation rules defined in the schema.

## License

This project is licensed under the [ISC License]().
