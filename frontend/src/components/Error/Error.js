
const ErrorComponent=({ error })=> {
    return (
      <div>
        <p>Status Code: {error.statusCode}</p>
        <p>Error: {error.message}</p>
      </div>
    );
  }

export default ErrorComponent;