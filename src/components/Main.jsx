import AOS from "aos";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import "aos/dist/aos.css";

import Box from "./Box";
import Modal from "./Modal";
import Loader from "./Loader";
import MessageBox from "./MessageBox";

import { lw3ContractAddress, buildspaceContractAddress } from "../lib/consts";

const Main = () => {
  const { address } = useAccount();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const a = "0xfd091aF831b3511EDF4A5AE525C4fc05012864F9";
  var b = "0x197be7B9D4Ab5bcDd3284cc42641Ea6bA961792f";
  const s = "0xdb6EAFFa95899B53b27086Bd784F3BBFd58Ff843";

  const url = `https://polygon-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}/getNFTs?owner=${address}&contractAddresses%5B%5D=${lw3ContractAddress}&contractAddresses%5B%5D=${buildspaceContractAddress}&withMetadata=true`;

  const { data, isPending, error } = useFetch(url);
  useEffect(() => {
    AOS.init();
  }, []);

  if (error) return <MessageBox message={error} />;
  if (isPending) return <Loader />;
  if (!data || data.ownedNfts.length == 0)
    return <MessageBox message={"No NFT found, keep learning"} />;

  return (
    <div>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} currentItem={currentItem} />
      )}
      <div
        className="text-white max-w-3xl mx-auto grid 
    grid-row-1 gap-8 p-2 md:grid-cols-2 md:gap-4"
      >
        {data.ownedNfts.map((item, index) => (
          <div
            onClick={() => {
              setCurrentItem(item);
              setIsModalOpen(true);
            }}
            key={index}
            className="cursor-pointer"
            data-aos="fade-up-right"
          >
            <Box item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
