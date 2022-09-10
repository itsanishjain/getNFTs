import ConnectWallet from "../src/components/ConnectWallet";
import Main from "../src/components/Main";

export default function Home() {
  return (
    <div>
      <div className="text-white text-lg">
        <div className="p-4">
          <ConnectWallet />
        </div>
        <Main />
      </div>
    </div>
  );
}
