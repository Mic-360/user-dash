const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Failed to connect to MongoDB Atlas', err));

// Define a schema for the User model
const userSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  kiosk_id: { type: String, required: true },
  assetData: {
    id: { type: String, required: true },
    image: { type: String },
    name: { type: String },
    brand: { type: String },
    type: { type: String },
    active_time: { type: Number },
    date: {
      type: Date,
      get: (v) => {
        if (v) {
          return new Date(v.$numberLong);
        }
        return null;
      },
    },
  },
});

const User = mongoose.model('users', userSchema);

/**
 * Route handler for updating user's active time on a specific asset.
 *
 * This endpoint receives a POST request containing the time spent on an asset by a user.
 * It updates the active time for the asset specified by the asset ID in the request parameters.
 *
 * @param {Object} req - The request object from Express.js.
 * @param {Object} req.params - The URL parameters.
 * @param {string} req.params.id - The ID of the asset for which the active time is being updated.
 * @param {Object} req.body - The body of the request, expected to contain the time spent.
 * @param {number} req.body.time - The amount of time (in some unit) that the user has spent on the asset.
 * @param {Object} res - The response object from Express.js.
 *
 * @returns {void} - The function does not return a value. It sends a JSON response with the updated user data
 * or an error message in case of failure.
 */
app.post('/web-analytics/assets/:id', async (req, res) => {
  console.log('Request body:', req.body.time);
  try {
    // Attempt to find a user with the specified asset ID and increment their active time
    const users = await User.findOneAndUpdate(
      {
        'assetData.id': req.params.id, // Filter to find the user with the matching asset ID
      },
      {
        $inc: { 'assetData.active_time': req.body.time }, // Increment the active time by the provided time
      },
      { new: true } // Option to return the document after update was applied
    );
    res.json(users); // Send the updated user data as JSON in the response
  } catch (err) {
    console.error(err); // Log any errors that occur during the operation
    res.status(500).send('Error fetching users'); // Send an error response if an exception is caught
  }
});

/**
 * Route to post user and asset data to the web analytics system.
 * This endpoint allows for the creation of a new user with associated asset data.
 *
 * @route POST /web-analytics/assets
 * @param req {Object} The request object from Express.js containing the payload.
 * @param res {Object} The response object from Express.js used to send back responses.
 * @returns {void} Returns nothing but sends a JSON response or an error message.
 */
app.post('/web-analytics/assets', async (req, res) => {
  // Destructure user and asset data from the request body
  const { user_id, kiosk_id, assetData } = req.body;

  try {
    // Validate user and asset data
    // Ensure all required fields are present
    if (!user_id || !kiosk_id || !assetData.id) {
      // If validation fails, return a 400 Bad Request status with a message
      return res.status(400).send('Missing required fields');
    }

    // Set today's date as the default value for assetData.date
    assetData.date = new Date();

    // Create a new User instance with the provided data
    const newUser = new User({
      user_id,
      kiosk_id,
      assetData, // Note: assetData is expected to be an object with at least an 'id' property
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Respond with a success message and the saved user data
    res.json({ message: 'Data accepted successfully', savedUser });
  } catch (err) {
    // Log any errors to the console and return a 500 Internal Server Error status
    console.error(err);
    res.status(500).send('Error creating user');
  }
});

/**
 * Route handler for fetching all users from the database.
 * This route is accessed via the GET method on the '/web-analytics' path.
 *
 * @async
 * @function
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to send back the requested data or errors.
 * @returns {void} - This function returns nothing as it directly sends the response to the client.
 */
app.get('/web-analytics', async (req, res) => {
  try {
    // Attempt to retrieve all users from the database using the User model's find method.
    const users = await User.find();

    // If successful, send the retrieved users as a JSON response.
    res.json(users);
  } catch (err) {
    // If an error occurs during the database operation, log the error to the console.
    console.error(err);

    // Send a 500 Internal Server Error status code with an error message to the client.
    res.status(500).send('Error fetching users');
  }
});

// Start the server
const port = process.env.PORT || 3000;
/**
 * Starts the server and listens for requests on the specified port.
 * Logs a message to the console once the server is up and running.
 *
 * @function
 * @param {number} port - The port number on which the server should listen for requests.
 * @returns {void}
 */
app.listen(port, () => console.log(`Server listening on port ${port}`));

// Remember to close the connection when done
/**
 * Event listener for SIGINT signal.
 * Closes the MongoDB client connection and exits the process.
 */
process.on('SIGINT', () => {
  // Close the MongoDB client connection
  client.close();

  // Log the closure of the MongoDB connection
  console.log('MongoDB connection closed');

  // Exit the process
  process.exit();
});
