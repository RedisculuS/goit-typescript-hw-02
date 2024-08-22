import toast, { Toaster } from "react-hot-toast";

type SearchBarProps = {
  onSearch: (topic: string) => void;
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const topicInput = form.elements.namedItem("topic") as HTMLInputElement;

    if (topicInput.value.trim() === "") {
      toast.error("Whoops... Please enter a topic in the input");
      return;
    }
    onSearch(topicInput.value);
    form.reset();
  };

  return (
    <div>
      <header>
        <div>
          <Toaster />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="topic"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};
