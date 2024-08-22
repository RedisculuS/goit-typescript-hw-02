type LoadMoreBtnProps = {
  onClick: () => void;
};

export const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <div>
      <button onClick={onClick}>Load more</button>
    </div>
  );
};
