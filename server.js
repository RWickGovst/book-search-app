// dependencies
const express  = require ("express");
const mongoose = require ("mongoose");

// file imports
const routes = require("./routes");

// express instance
const app = express();

// assign a port
const PORT = process.env.PORT || 3001;

// configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// add routes, API and view
app.use(routes);

const DBNAME = 'book-search-app'
// connect to mongo db
mongoose.connect(
    process.env.MONGODB_URI || `mongodb://localhost/${DBNAME}`, {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);
// server listener
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost/${PORT}`);
})