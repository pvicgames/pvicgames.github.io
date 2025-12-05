import { useTranslation } from "react-i18next"
import ActualPage from "../components/global/ActualPage"

import webIcon from "../assets/img/badges/web.png";
import downloadIcon from "../assets/img/badges/download.png";

import Logo from "../assets/img/artius/logo.png";

const PlayArtius = () => {
    const { t } = useTranslation()

  return (

    <ActualPage singleColumn={true}>
        <div className="min-h-screen flex flex-col items-center justify-center">
            <img src={Logo} className="max-w-[700px]" />
            
            <p className="font-adlib text-2xl mt-10 mb-10">Select an option:</p>

            <div className="max-w-[550px]">
                <a className="text-4xl text-center font-adlib mt-5 mb-2
                                bg-black text-white p-3 rounded-2xl
                                drop-shadow-[0px_0px_10px_rgba(255,255,255,1)]
                                hover:drop-shadow-[0px_0px_20px_rgba(255,255,255,255)]
                                cursor-pointer duration-100 transform hover:rounded-3xl
                                flex items-center gap-2 hover:scale-105"
                    href="https://gamejolt.com/games/artius/975794" target="_blank"
                >
                    <img className="w-[80px] ml-3 mr-5" src={downloadIcon}/> 
                    {t("games.newArtius.playDesk")}
                </a>
            </div>

            <div className="max-w-[775px] mb-20">
                <a className="text-4xl text-center font-adlib mt-5 mb-2
                                bg-black text-white p-3 rounded-2xl
                                drop-shadow-[0px_0px_10px_rgba(255,255,255,1)]
                                hover:drop-shadow-[0px_0px_20px_rgba(255,255,255,255)]
                                cursor-pointer duration-100 transform hover:rounded-3xl
                                flex items-center gap-2 hover:scale-105"
                    href="https://pvicvg.com/webartius/" target="_blank"
                >
                    <img className="w-[80px] ml-3 mr-5" src={webIcon}/> 
                    {t("games.newArtius.playWeb")}
                </a>
              </div>
        </div>
    </ActualPage>
  )
}

export default PlayArtius