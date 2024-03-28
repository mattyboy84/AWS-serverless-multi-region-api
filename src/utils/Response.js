async function JSONresponse(statusCode, headers, body) {

  const { AWS_DEFAULT_REGION, AWS_LAMBDA_LOG_STREAM_NAME } = process?.env;
  if (AWS_DEFAULT_REGION) headers.REGION = AWS_DEFAULT_REGION;
  if (AWS_LAMBDA_LOG_STREAM_NAME) headers.STREAM = AWS_LAMBDA_LOG_STREAM_NAME;
  return {
    statusCode,
    headers: { ...headers },
    body: JSON.stringify(body, null, 4),
  };
}

module.exports = {
  JSONresponse,
};
