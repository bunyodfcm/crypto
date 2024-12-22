import Header from "../../../components/header/Header";
import MarketStarts from "./components/Market-starts";
import { Icon } from "@iconify/react/dist/iconify.js";

const Banner = () => {
  return (
    <div className="bg-banner bg-cover bg-center h-screen w-full flex flex-col">
      <Header />
      <div className="w-full flex-grow">
        <h1 className="mt-12 text-center text-7xl font-bold ">
          Next Generation
          <br />
          Crypto Trading
        </h1>
        <MarketStarts />
        {/* banner footer */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-medium">We accept</h3>
          <div className="mt-7 flex gap-8">
            <div className="flex gap-2">
              <Icon icon="cryptocurrency-color:btc" width="24" height="24" />
              <span>Bitcoin</span>
            </div>
            <div className="flex gap-2">
              <Icon icon="cryptocurrency-color:ltc" width="24" height="24" />
              <span>Litcoin</span>
            </div>
            <div className="flex gap-2">
              <Icon icon="cryptocurrency-color:link" width="24" height="24" />
              <span>Chainlink</span>
            </div>
            <div className="flex gap-2">
              <Icon icon="cryptocurrency-color:sc" width="24" height="24" />
              <span>Siacoin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
