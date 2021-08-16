import AWS from "aws-sdk";

AWS.config.update({
  region: "us-east-1",
  accessKeyId: "AKIA4S5RXK2L6DJVHOH4",
  secretAccessKey: "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"
});
const dynamodb = new AWS.DynamoDB.DocumentClient();

export default dynamodb;
