import { Loader } from "./Loader";

type ButtonProps = {
  onClick: () => void;
  loading: boolean;
};
export const Button = ({ onClick, loading }: ButtonProps) => {
  return (
    <>
      <button className="basic-btn" onClick={onClick}>
        {loading ? <Loader /> : "Get them all !"}
      </button>
      <style>
        {`
        .basic-btn {
          border-radius: 8px;
          border: 1px solid transparent;
          padding: 0.6em 1.2em;
          font-size: 1em;
          font-weight: 500;
          font-family: inherit;
          background-color: #1a1a1a;
          cursor: pointer;
          color: #646cff;
          transition: border-color 0.25s;
        }
        .basic-btn:hover {
          border-color: #646cff;
          text-shadow: #646cff85 0 0 12px;
          transition: text-shadow 0.25s;
          filter: drop-shadow(0 0 4px #646cff8f);
          /* color: #ffffffb0; */
        }
        `}
      </style>
    </>
  );
};
