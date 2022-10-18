import { PrimaryButton } from "./components/atom/button/PrimaryButton";
import { SeconButton } from "./components/atom/button/SeconButton";
import { Serch } from "./components/molecules/Serch";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <PrimaryButton>テスト </PrimaryButton>
      <PrimaryButton>テスト2 </PrimaryButton>
      <SeconButton>テスト３</SeconButton>
      <br />
      <Serch />
      <UserCard />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
