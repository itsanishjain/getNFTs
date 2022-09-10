import ConnectWallet from "../src/components/ConnectWallet";
import Main from "../src/components/Main";

export default function Home() {
  return (
    <div>
      <div className="bg-slate-900 h-screen w-screen">
        <div className="p-4">
          <ConnectWallet />
        </div>
        <Main />
      </div>
    </div>
  );
}
