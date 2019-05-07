// Connect your Database;
// mongo "mongodb://cluster0-shard-00-00-jxeqq.mongodb.net:27017,cluster0-shard-00-01-jxeqq.mongodb.net:27017,cluster0-shard-00-02-jxeqq.mongodb.net:27017/100YWeatherSmall?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl --username m001-student --password m001-mongodb-basics


// 1. Check all the data available:
use coursera_agg;
db.product_categories.find().pretty();
// 2. $and operator
// Find products where parent is "Dog Supplies" and not "Pet Supplies"
db.product_categories.find({
    $and: [{
            "parent": {
                $ne: "Pet Supplies"
            }
        },
        {
            "parent": "Dog Supplies"
        }
    ],
})

// Find products where name is "Dog Apparel" and parent is not "Dog Supplies"
db.product_categories.find({
    $and: [{
            "parent": {
                $ne: "Dog Supplies"
            }
        },
        {
            "name": "Dog Apparel"
        }
    ],
}).pretty()

// Find products where name is "Breast Petals & Concealers" and parent is  "Lingerie Accessories"

db.product_categories.find({
    $and: [{
            "parent": "Lingerie Accessories"
        },
        {
            "name": "Breast Petals & Concealers"
        }
    ],
}).pretty()


// 2. $or
// Find movies where genre is Short and Documentart or viewerRating is greater than 6.8
db.movies.find({
    $or: [{
            "genre": {
                $in: ["Short", "Documentary"]
            }
        },
        {
            "viewerRating": {
                $gt: 6.8
            }
        }
    ]
})

// Find movies where Genre should be Short or Documentary and viewerRating should be greater than 6.8 or viewerVotes greater than 400

db.movies.find({
    $and: [{
            "genre": {
                $in: ["Short", "Documentary"]
            }
        },
        {
            $or: [{
                    "viewerRating": {
                        $gt: 6.8
                    }
                },
                {
                    "viewerVotes": {
                        $gt: 400
                    }
                }
            ]
        }
    ]
}).pretty()

// Find movies where Genre should not be Short or Documentary and viewerRating should be greater than 6.8 or viewerVotes greater than 400

db.movies.find({
    $nor: [{
            "genre": {
                $in: ["Short", "Documentary"]
            }
        },
        {
            $or: [{
                    "viewerRating": {
                        $gt: 6.8
                    }
                },
                {
                    "viewerVotes": {
                        $gt: 400
                    }
                }
            ]
        }
    ]
}).pretty()