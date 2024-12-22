// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://ssguggutor128:Dabeli128@cluster0.wpytuo5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const handler = async (event) => {
  // event.headers.set("Access-Control-Allow-Origin", "http://localhost:8888");
  // event.headers.append("Access-Control-Allow-Headers", "http://localhost:8888");
  // event.headers.append("Access-Control-Allow-Methods", "http://localhost:8888");
  // console.log("event  ", event.headers.get("accept"));
  // return "cat";
  try {
    // const subject = event.queryStringParameters.name || "World";
    const finalData = [];
    console.log("book ", JSON.parse(event.body).url);
    console.log("body ", event.body);
    const client = new MongoClient(uri);
    const database = client.db("atun-portfolio");
    const publication = database.collection(JSON.parse(event.body).url);

    // query to fetch whole data from collection.
    const cursor = publication.find({}, { projection: { _id: 0 } });
    for await (const data of cursor) {
      finalData.push(data);
    }

    // console.log("event ", event);
    return {
      statusCode: 200,
      body: JSON.stringify(finalData),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
