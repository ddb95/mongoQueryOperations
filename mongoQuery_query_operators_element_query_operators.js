// Connect to your database
// mongo "mongodb://cluster0-shard-00-00-jxeqq.mongodb.net:27017,cluster0-shard-00-01-jxeqq.mongodb.net:27017,cluster0-shard-00-02-jxeqq.mongodb.net:27017/100YWeatherSmall?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl --username m001-student --password m001-mongodb-basics


1. // Check if Data available
use citibike;
show collections;
db.trips.find().pretty();

2. // $exists operator: This query will select all documents in the trip collection where the tripduration field exists and its value is less than 65.
db.trips.find({
    "tripduration": {
        $exists: true,
        $lt: 65
    }
}).pretty()

// This query will select all documents in the trip collection where the tripduration field exists and its value is greater than 773.

db.trips.find({
    $and: [{
            "tripduration": {
                $exists: true,
            }
        },
        {
            "tripduration": {
                $gt: 773
            }
        }
    ]
}).count()

// This query will select all documents in the trip collection where the tripduration field doesnt exists

db.trips.find({
    "tripduration": {
        $exists: false
    }
}).pretty()


3. // $type operator: Checks the type of a field in documents
db.trips.find({
    "birth year": {
        $type: "string"
    }
}).count()

