import { useState } from "react";
import { Icon } from "@iconify/react";

interface Language {
  value: string;
  label: string;
  icon: string;
}

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<string>("uz");

  const languages: Language[] = [
    { value: "uz", label: "UZ", icon: "circle-flags:uz" },
    { value: "en", label: "ENG", icon: "circle-flags:gb" },
    { value: "ru", label: "РУС", icon: "circle-flags:ru" },
  ];

  const handleLangSelect = (lang: string) => {
    setSelectedLang(lang);
    setIsOpen(false); // Tanlangan tilni o'rnatgandan so'ng menyuni yopamiz
  };

  return (
    <div className="relative">
      <div
        className="flex items-center justify-center gap-3 cursor-pointer border border-primary rounded-[20px] px-3 py-2 min-w-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon
          icon={
            languages.find((lang) => lang.value === selectedLang)?.icon || ""
          }
          width={18}
          height={18}
          className="min-w-[18px] min-h-[18px]"
        />
        <span className="flex flex-shrink-0 min-w-max">
          {languages.find((lang) => lang.value === selectedLang)?.label ||
            "???"}
        </span>
      </div>

      <div
        className={`w-[120%] absolute bg-white border border-primary mt-2 rounded-lg shadow-lg transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60" : "max-h-0 border-none"
        } overflow-hidden`}
      >
        {languages.map((lang, index) => (
          <div
            key={lang.value}
            className={`flex items-center justify-center p-2 cursor-pointer hover:bg-primary ${
              lang.value === selectedLang ? "bg-primary" : ""
            }`}
            onClick={() => handleLangSelect(lang.value)}
            style={{
              zIndex: isOpen ? 20 - index : 10 + index,
            }}
          >
            <Icon
              icon={lang.icon}
              width={18}
              height={18}
              className="mr-2 h-[18px] min-h-[18px] w-[18px] min-w-[18px]"
            />
            {lang.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
