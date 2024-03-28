
// example event
/*
{
  "authorizationToken": "ExampleAUTHtoken123123123",
  "requestContext": {
    "apiId": "aaaaaa123123123example123",
    "accountId": "111122223333",
    "requestId": "f4081827-1111-4444-5555-5cf4695f339f",
    "queryString": "mutation CreateEvent {...}\n\nquery MyQuery {...}\n",
    "operationName": "MyQuery",
    "variables": {}
  }
}

*/
async function handler(event, context) {
  console.log(event);
  console.log(context);

  return {
    isAuthorized: true,
    resolverContext: {},
    // "deniedFields": [
    //     "<list of denied fields (ARNs or short names)>"
    // ],
    // "ttlOverride": <optional value in seconds that overrides the default ttl>
  };
}

// example response
/*
{
  "isAuthorized": <true|false>,
  "resolverContext": {<JSON object, optional>},
  "deniedFields": [
    "<list of denied fields (ARNs or short names)>"
  ],
  "ttlOverride": <optional value in seconds that overrides the default ttl>
}
*/

module.exports = {
  handler,
};
