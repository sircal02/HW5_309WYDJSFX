// import and use mongodb.MongoClient
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const dbConnectionUrl = 'mongodb+srv://eugene-sew4:agmtagmt1@cluster0.nfj2w.mongodb.net/Covid_19?retryWrites=true&w=majority';

function initialize(dbName, dbCollectionName, successCallback, failureCallback) {
	MongoClient.connect(dbConnectionUrl, function (err, dbInstance) {
		if (err) {
			console.log(`[MongoDB connection] ERROR: ${err}`);
			failureCallback(err);        // this should be "caught" by the calling function
		} else {
			const dbObject = dbInstance.db('Covid_19');
			const dbCollection = dbObject.collection('counts');

			console.log("[MongoDB connection] SUCCESS");
			successCallback(dbCollection);
		}
	});
}

module.exports = { initialize };