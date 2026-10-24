import { useCallback, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import Portal from "./global/Portal";
import ArtiusPediaWiki from "./ArtiusPediaWiki";

// the artiuspedia over the artius page, lives at /artius/artiuspedia(/section(/entry))
const ArtiusPediaPopup = () => {
  const { section, entry } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // opened from the page: go back so the browser history stays clean, opened from a link: just show the page
  const close = useCallback(() => {
    if (location.state?.fromPage) navigate(-1);
    else navigate("/artius", { replace: true });
  }, [location.state, navigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  // page behind doesn't scroll while it's open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <Portal>
      <div
        className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.7)] backdrop-blur-sm flex items-center justify-center p-3 xl:p-10"
        onClick={close}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t("games.newArtius.artiuspedia")}
          className="relative w-full max-w-[1250px] max-h-full overflow-y-auto overscroll-contain
                     bg-white rounded-2xl border-6 border-pvic-pink drop-shadow-[7px_7px_0px_#3c89d7]
                     animate__animated animate__zoomIn animate__faster"
          onClick={(e) => e.stopPropagation()}
        >
          <ArtiusPediaWiki section={section} entry={entry} onClose={close} />
        </div>
      </div>
    </Portal>
  );
};

export default ArtiusPediaPopup;
