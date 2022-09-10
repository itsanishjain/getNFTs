import AOS from "aos";
import Image from "next/image";
import useFetch from "../hooks/useFetch";
import { useAccount } from "wagmi";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import Loader from "./Loader";

import {
  lw3ContractAddress,
  buildspaceContractAddress,
  lw3Images,
} from "../lib/consts";
import Modal from "./Modal";

const Main = () => {
  const { address } = useAccount();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const a = "0xfd091aF831b3511EDF4A5AE525C4fc05012864F9";
  var b = "0x197be7B9D4Ab5bcDd3284cc42641Ea6bA961792f";
  const s = "0xdb6EAFFa95899B53b27086Bd784F3BBFd58Ff843";

  const url = `https://polygon-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}/getNFTs?owner=${a}&contractAddresses%5B%5D=${lw3ContractAddress}&contractAddresses%5B%5D=${buildspaceContractAddress}&withMetadata=true`;

  const { data, isPending, error } = useFetch(url);
  useEffect(() => {
    AOS.init();
  }, []);

  if (error)
    return (
      <div className="text-white bg-orange-700 p-4 m-4 rounded">{error}</div>
    );

  if (isPending) return <Loader />;

  return (
    <div>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      <div
        className="text-white max-w-3xl mx-auto grid 
    grid-row-1 gap-8 p-2 md:grid-cols-2 md:gap-4"
      >
        {data && data.length == 0 ? (
          <span>No NFTS</span>
        ) : (
          data
            .concat(data)
            .concat(data)
            .concat(data)
            .map((item, index) => (
              <div
                key={index}
                className="cursor-pointer"
                data-aos="fade-up-right"
              >
                {lw3Images[parseInt(item.id.tokenId)] ? (
                  <Image
                    src={lw3Images[parseInt(item.id.tokenId)]}
                    height={200}
                    width={400}
                    alt={`image_${index}`}
                  />
                ) : item.media[0].raw.split(".").pop() == "png" ? (
                  <Image
                    src={item.media[0].raw}
                    height={250}
                    width={400}
                    alt={`image_${index}`}
                  />
                ) : (
                  <video width="100%" height="480" autoPlay muted loop>
                    <source src={item.media[0].raw} type="video/mp4" />
                  </video>
                )}
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Main;
