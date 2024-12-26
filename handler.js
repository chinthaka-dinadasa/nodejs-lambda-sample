const { v4: uuidv4 } = require("uuid");

exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v4! Your function executed successfully!",
      sample_data_id: uuidv4(),
    }),
  };
};
