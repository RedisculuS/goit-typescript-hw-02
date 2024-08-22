type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div>
      <h3>{message}</h3>
    </div>
  );
};
