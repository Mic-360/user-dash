// // Define data schema
// const dataSchema = new mongoose.Schema(
//   {
//     product_id: { type: String, required: false },
//     product_name: { type: String, required: false },
//     product_image: { type: String, required: false },
//     kiosk_id: { type: String, required: false },
//     user_id: { type: String, required: false },
//     active_time: { type: Number, required: false },
//     date: { type: Date, required: false },
//   },
//   {
//     // Disable automatic generation of _id field
//     _id: false,
//     // Enable versioning
//     versionKey: true,
//     // Set the collection name to 'web-analytics'
//     collection: 'web-analytics',
//     // Enable automatic index creation
//     autoIndex: true,
//   }
// );

// const DataModel = mongoose.model('web-analytics', dataSchema);

// // Endpoint to send data
// /**
//  * POST endpoint for '/web-analytics'. This function receives data from the request body,
//  * creates a new DataModel instance with it, and attempts to save it to the database.
//  * If the data is invalid or the save operation fails, it sends an appropriate error response.
//  *
//  * @async
//  * @function
//  * @param {Object} req - Express request object, containing the data to be saved in its body.
//  * @param {Object} res - Express response object, used to send the response back to the client.
//  * @returns {Object} - If successful, the function sends back the saved data as a JSON response.
//  *                     If the data is invalid, it sends a 400 error with a message 'Invalid data'.
//  *                     If there's an error during the save operation, it sends a 500 error with a message 'Error saving data'.
//  */
// app.post('/web-analytics', async (req, res) => {
//   try {
//     const data = new DataModel(req.body);
//     await data.save();
//     if (!data) {
//       return res.status(400).json({ message: 'Invalid data' });
//     }
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ message: 'Error saving data' });
//   }
// });

// // Endpoint to retrieve data
// /**
//  * GET endpoint for '/web-analytics/:id'. This function receives a product id from the request parameters,
//  * finds the corresponding product in the database, and sends it back to the client.
//  * If the product is not found, it sends a 404 error with a message 'Product not found'.
//  * If there's an error during the find operation, it sends a 500 error with a message 'Server error'.
//  *
//  * @async
//  * @function
//  * @param {Object} req - Express request object, containing the product id in its parameters.
//  * @param {Object} res - Express response object, used to send the response back to the client.
//  * @returns {Object} - If successful, the function sends back the found product as a JSON response.
//  *                     If the product is not found, it sends a 404 error with a message 'Product not found'.
//  *                     If there's an error during the find operation, it sends a 500 error with a message 'Server error'.
//  */
// app.get('/web-analytics/:id', async (req, res) => {
//   try {
//     const product = await DataModel.findOne({ product_id: req.params.id });
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.json(product);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Endpoint to update data
// /**
//  * PUT endpoint for '/web-analytics/:id'. This function receives a product id from the request parameters and data from the request body,
//  * finds the corresponding product in the database, updates it with the new data, and sends the updated product back to the client.
//  * If the product is not found, it creates a new product with the provided data.
//  * If the data is invalid, it sends a 400 error with a message 'Invalid data'.
//  * If there's an error during the update operation, it sends a 500 error with a message 'Server error'.
//  *
//  * @async
//  * @function
//  * @param {Object} req - Express request object, containing the product id in its parameters and the data to update the product in its body.
//  * @param {Object} res - Express response object, used to send the response back to the client.
//  * @returns {Object} - If successful, the function sends back the updated product as a JSON response.
//  *                     If the product is not found, it creates a new product and sends it back.
//  *                     If the data is invalid, it sends a 400 error with a message 'Invalid data'.
//  *                     If there's an error during the update operation, it sends a 500 error with a message 'Server error'.
//  */
// app.put('/web-analytics/:id', async (req, res) => {
//   try {
//     const updatedProduct = await DataModel.findOneAndUpdate(
//       { product_id: req.params.id },
//       req.body,
//       { new: true, upsert: true, runValidators: true }
//     );
//     if (!updatedProduct) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.json(updatedProduct);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });
