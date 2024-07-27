import { API_KEY, APPSYNC_URL, REGION } from '@env';

const awsmobile = {
  "aws_project_region": REGION,
  "aws_appsync_graphqlEndpoint": APPSYNC_URL,
  "aws_appsync_region": REGION,
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": API_KEY
};

export default awsmobile;
