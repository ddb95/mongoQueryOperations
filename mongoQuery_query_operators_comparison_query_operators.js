// Connect your Database;
// mongo "mongodb+srv://cluster0-f2zzi.mongodb.net/test" --username m001-student --password m001-mongodb-basics


// 1. Check all the data available
db.movieDetails.find().pretty();
// 2. $eq operator
// Find all the movies where imdb votes is equal to 67824

db.movieDetails.find({
    "imdb.votes": {
        $eq: 67824
    }
}).pretty();

// This is equal to

db.movieDetails.find({
    "imdb.votes": 67824
}).pretty();

// Find all the movies where one of the actors is equal "Clint Eastwood"

db.movieDetails.find({
    "actors": {
        $eq: "Clint Eastwood"
    }
}).pretty();

// This is equal to

db.movieDetails.find({
    "actors": "Clint Eastwood"
}).pretty();


// 3. $gt/$lt -> greater than and $gte/$lte -> greater than or equal to
// Find all the movies where one of the rating is greater than "9"
db.movieDetails.find({
    "imdb.rating": {
        $gt: 9
    }
}).pretty();

// 4. $in: The $in operator selects the documents where the value of a field equals any value in the specified array.
// Find the movies where "Simon Pegg", "Edgar Wright" are writers.
db.movieDetails.find({
    "writers": {
        $in: ["Simon Pegg", "Edgar Wright"]
    }
}).count();

// Find the movies where "Alison Pill","Mark Webber" are one of the actors
db.movieDetails.find({
    "actors": {
        $in: ["Alison Pill", "Mark Webber"]
    }
}).count();

// 5. $ne -> not equal to
db.movieDetails.find({
    "imdb.rating": {
        $ne: 9
    }
}).pretty();