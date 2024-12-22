import { useState, useEffect } from "react";

const MarketStarts: React.FC = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  // Bozor ochilish vaqti (09:30 EST = 14:30 UTC)
  const marketOpenHourUTC: number = 14; // 14:30 UTC (soat)
  const marketOpenMinute: number = 30; // 30 daqiqa

  // Timerni yangilash funksiyasi
  const updateTimer = (): void => {
    const now: Date = new Date();
    const currentUTCDate: Date = new Date(now.toISOString().slice(0, 10)); // Bugungi sana UTC formatida

    // Bozor ochilish vaqti (UTC formatida)
    let nextMarketOpen: Date = new Date(currentUTCDate);
    nextMarketOpen.setUTCHours(marketOpenHourUTC, marketOpenMinute, 0, 0);

    // Agar bugungi bozor ochiq vaqti o'tgan bo'lsa yoki dam olish kuni bo'lsa, keyingi ochilishni belgilash
    const dayOfWeek: number = now.getUTCDay(); // 0 = yakshanba, 6 = shanba
    if (dayOfWeek === 6 || dayOfWeek === 0 || now >= nextMarketOpen) {
      // Dam olish kunlari yoki bozor yopilganidan keyin
      const daysToAdd: number = dayOfWeek === 5 ? 2 : 1; // Shanba bo'lsa 2 kun, boshqa holatlarda 1 kun qo'shiladi
      nextMarketOpen.setUTCDate(nextMarketOpen.getUTCDate() + daysToAdd);
    }

    // Qolgan vaqtni hisoblash
    const diffMs: number = nextMarketOpen.getTime() - now.getTime();
    const calculatedDays: number = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const calculatedHours: number = Math.floor(
      (diffMs / (1000 * 60 * 60)) % 24
    );
    const calculatedMinutes: number = Math.floor((diffMs / (1000 * 60)) % 60);
    const calculatedSeconds: number = Math.floor((diffMs / 1000) % 60);

    // State-larni yangilash
    setDays(calculatedDays);
    setHours(calculatedHours);
    setMinutes(calculatedMinutes);
    setSeconds(calculatedSeconds);
  };

  useEffect(() => {
    // Har soniyada timerni yangilash
    const timer: NodeJS.Timeout = setInterval(updateTimer, 1000);
    return () => clearInterval(timer); // Komponent unmount bo'lsa timerni tozalash
  }, []);

  return (
    <div className="mt-7 timer">
      <h2 className="font-extralight text-center">Crypto Market Start in</h2>
      <div className="flex justify-center items-center gap-3 mt-7 px-10 py-3 rounded-3xl my-auto">
        <div className="flex flex-col items-center">
          <span className="text-primary text-[30px] font-semibold">
            {days.toString().padStart(2, "0")}
          </span>
          <span className="text-xs font-extralight">DAYS</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span className="text-primary text-[30px] font-semibold">
            {hours.toString().padStart(2, "0")}
          </span>
          <span className="text-xs font-extralight">HOURS</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span className="text-primary text-[30px] font-semibold">
            {minutes.toString().padStart(2, "0")}
          </span>
          <span className="text-xs font-extralight">MINUTES</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span className="text-primary text-[30px] font-semibold">
            {seconds.toString().padStart(2, "0")}
          </span>
          <span className="text-xs font-extralight">SECUNDS</span>
        </div>
      </div>
      <div className="my-10 flex justify-center gap-8">
        <button className="btn btn-primary">DOWNLAND APP</button>
        <button className="btn">TRADE CRYPTO</button>
      </div>
    </div>
  );
};

export default MarketStarts;
