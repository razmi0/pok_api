import { Loader } from "./Loader";

type ButtonProps = {
  onClick: () => void;
  loading: boolean;
};
export const Button = ({ onClick, loading }: ButtonProps) => {
  return (
    <button className="App" onClick={onClick}>
      {loading ? <Loader /> : "Get them all !"}
    </button>
  );
};
