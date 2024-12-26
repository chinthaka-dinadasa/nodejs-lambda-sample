## Simplifying AWS Lambda Development with Node.js and Lambda Layers

Welcome to the guide on optimizing your AWS Lambda functions with Lambda Layers! This article dives into how you can streamline your Node.js serverless applications by reusing dependencies, reducing deployment package sizes, and simplifying updates. 

Whether you’re a beginner or an experienced developer, this guide will help you unlock the full potential of AWS Lambda Layers.

Read the full article on Medium: [Simplifying AWS Lambda Development with Node.js and Lambda Layers](https://medium.com/p/927f29248061)

### Usage

#### Deployment

In order to deploy the example, you need to run the following command:

```
serverless deploy
```

After running deploy, you should see output similar to:

```
Deploying "serverless-http-api" to stage "dev" (us-east-1)

✔ Service deployed to stack serverless-http-api-dev (91s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: serverless-http-api-dev-hello (1.6 kB)
```