type Error = {
  response?: {
    data?: {
      message: string | any;
    };
  };
  message?: string | any;
};

export const setError = (error: Error) => {
  const message: any =
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString();

  return message;
};
