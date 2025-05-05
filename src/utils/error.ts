class CustomError extends Error {
  message: string;
  statusCode: number;
  from?: string;
  redirectUrl?: string;

  constructor(
    {
      message,
      statusCode,
    }: {
      message: string;
      statusCode: number;
    },
    from?: string,
    redirectUrl?: string
  ) {
    super();
    this.message = message;
    this.statusCode = statusCode;
    this.from = from;
    this.redirectUrl = redirectUrl;
  }
}

const getErrorMessage = (err: unknown) => {
  if (err instanceof Error) {
    return err.message;
  }
  return "Unknown Error";
};

export default CustomError;

export { getErrorMessage };
