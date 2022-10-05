import React from "react";
import Image from "next/image";

import Main from "./Main";
import ConnectWallet from "./ConnectWallet";

const Home = () => {
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
};

export default Home;
