const {MongoClient} = require('mongodb');

async function main() {
	console.log("Hello Nishit. Welcome to node\n")
    const uri= 'mongodb+srv://nishit01:nishit01@firsttask.gsdfczd.mongodb.net/?retryWrites=true&w=majority' 
    const client = new MongoClient(uri);
    // let result = 
    try{
        await client.connect();
        await listDatabases(client);
        await find_listing_by_name(client, 12);
    //     await createListing(client, 
    //         {
    //             _id: 11,
    //             desc: "Software engineer who can work on enterprise projects using spring boot alongside Nodejs and MongoDB",
    //             exp: 1,
    //             profile: "developer",
    //             techs: Array,
    //                 0:"java",
    //                 1:"jee",
    //                 2:"spring",
    //                 3:"springbot",
    //                 4:"microservices",
    //                 5:"MongoDB"
    //         })
    } catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
    // let db = result.db('javaSpring');
    // let collection = db.collection('first_collection');
    // console.log(collection.find({}).toArray());
}

main().catch(console.error);

async function find_listing_by_name(client, nameOfListing)
{
    const result= await client.db("javaSpring").collection("first_collection").findOne({exp:nameOfListing});

    if(result)
    {
        console.log(`Found the listing with experience'${nameOfListing}'`);
        console.log(result);
    }
    else{
        console.log(`No listing found`);
    }
}

// async function createListing(client, newListing)
// {
//     const result = await client.db("javaSpring").collection("first_collection").insertOne(newListing);
//     console.log(`new Listing added. ID: ${result.insertedID}`);
// }

 async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};