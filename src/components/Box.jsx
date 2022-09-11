import Image from "next/image";
import { lw3ContractAddress, lw3Images } from "../lib/consts";

const Box = ({ item }) => {
  return (
    <div>
      {item.contract.address.toLowerCase() == lw3ContractAddress ? (
        <Image
          src={lw3Images[parseInt(item.id.tokenId)]}
          height={200}
          width={400}
          alt={`image_${item.id.tokenId}`}
        />
      ) : item.media[0].raw.split(".").pop() == "png" ? (
        <Image
          src={item.media[0].raw}
          height={200}
          width={400}
          alt={`image_${item.id.tokenId}`}
        />
      ) : (
        <video width="100%" autoPlay muted loop playsInline>
          <source src={item.media[0].raw} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Box;
