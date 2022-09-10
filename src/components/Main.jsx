import Image from "next/image";
import useFetch from "../hooks/useFetch";
import { useAccount } from "wagmi";

import fresh from "./0.jpg";

import Loader from "./Loader";
import {
  lw3ContractAddress,
  buildspaceContractAddress,
  lw3Images,
} from "../lib/consts";

const Main = () => {
  const { address } = useAccount();

  console.log({ fresh });

  const a = "0x8bf6259570a5E439CDF78151d52C5bE460E2ef24";
  var b = "0x197be7B9D4Ab5bcDd3284cc42641Ea6bA961792f";

  // const lw3URL = `https://polygon-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}/getNFTs?owner=${a}&contractAddresses%5B%5D=${lw3ContractAddress}&withMetadata=true`;

  const url = `https://polygon-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}/getNFTs?owner=0x8bf6259570a5E439CDF78151d52C5bE460E2ef24&contractAddresses%5B%5D=0x1Ed25648382c2e6Da067313e5DAcb4F138Bc8b33&contractAddresses%5B%5D=0x3CD266509D127d0Eac42f4474F57D0526804b44e&withMetadata=true`;

  const { data, isPending, error } = useFetch(url);

  console.log({ data });
  console.log({ isPending });
  console.log({ error });

  // if (!address)
  //   return (
  //     <div className="text-white bg-orange-700 p-4 m-4 rounded">
  //       Please connect to your wallet
  //     </div>
  //   );
  if (error)
    return (
      <div className="text-white bg-orange-700 p-4 m-4 rounded">{error}</div>
    );

  if (isPending) return <Loader />;

  return (
    <div className="text-white bg-orange-700 p-4 m-4 rounded">
      {data && data.length == 0 ? (
        <span>No NFTs</span>
      ) : (
        data.map((item, index) => (
          <div key={index}>
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
                height={200}
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
  );
};

export default Main;
