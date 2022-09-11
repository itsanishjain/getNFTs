import ConnectWallet from "../src/components/ConnectWallet";
import Main from "../src/components/Main";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Home() {
  return (
    <div>
      <div className="text-white text-lg">
        <div className="flex justify-between items-center p-2">
          <p className="text-2xl font-bold">
            <Image src={logo} width={240} height={70} alt="logo" />
          </p>
          <div className="p-4">
            <ConnectWallet />
          </div>
        </div>
        <Main />
      </div>
    </div>
  );
}
