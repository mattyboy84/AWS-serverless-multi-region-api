const { JSONresponse } = require('./utils/Response');

async function handler(event, context) {
  console.log(event);

  let statusCode = 200;

  console.log(`failing: ${process?.env?.fail}`);
  if (process?.env?.fail) {
    statusCode = 500;
  }
  console.log(statusCode);

  const response = await JSONresponse(
    statusCode,
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
    },
    {},
  );

  return response;
}

module.exports = {
  handler,
};
