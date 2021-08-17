import AWS = require('aws-sdk');
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "cvgenerator";

export const getData = async () => {
  const params = {
    TableName: TABLE_NAME
  }
  const data = await dynamoClient.scan(params).promise();
  console.log(data);
  return data;
}

export const getCvById = async (id) => {
  const params = {
      TableName: TABLE_NAME,
      Key: {
          id,
      },
  };
  return await dynamoClient.get(params).promise();
};

export const addOrUpdateCv = async (cv) => {
  const params = {
      TableName: TABLE_NAME,
      Item: cv,
  };
  return await dynamoClient.put(params).promise();
};

export const deleteCv = async (id) => {
  const params = {
      TableName: TABLE_NAME,
      Key: {
          id,
      },
  };
  return await dynamoClient.delete(params).promise();
};

module.exports = {
  getData,
  getCvById,
  addOrUpdateCv,
  deleteCv
}