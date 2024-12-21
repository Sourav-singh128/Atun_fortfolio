var cloudinary = require("cloudinary");

const handler = async (event) => {
  cloudinary.config({
    cloud_name: "dc784nwli", // add your cloud_name
    api_key: "475654399952154", // add your api_key
    api_secret: "aGV2QifOCLyqvwWGvehB5mx2Lvc", // add your api_secret
    secure: true,
  });

  try {
    const folder = JSON.parse(event.body).folder;
    const res = await cloudinary.v2.search
      .expression(
        `folder: ${folder}` // add your folder
      )
      .sort_by("created_at", "desc")
      .max_results(500)
      .execute();
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
module.exports = { handler };
