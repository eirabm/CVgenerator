declare function require(name:string);
const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com",
  accessKeyId: "AKIA4S5RXK2L6DJVHOH4", 
  secretAccessKey: "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"
});

export const dynamodb = new AWS.DynamoDB.DocumentClient();
