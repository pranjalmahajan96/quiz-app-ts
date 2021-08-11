import { HeaderProps1 } from "../../types";

export const Header = ({ username, score, status }: HeaderProps1) => {
  return (
    <header>
      <h1>Test Your FrontEnd Knowledge!</h1>
      <div style={{ fontSize: "1.2rem" }}>
        <div>Welcome, {username}!</div>
        <div>
          Score: {score} Status : {status}
        </div>
      </div>
    </header>
  );
};
