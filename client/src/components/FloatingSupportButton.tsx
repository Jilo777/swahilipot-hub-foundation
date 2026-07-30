import { FaCommentDots } from "react-icons/fa";

const SUGGESTION_BOX_LINK = "https://swahilipot-box.free.nf";

const FloatingSupportButton = () => {
  return (
    <a
      href={SUGGESTION_BOX_LINK}
      aria-label="Open suggestion box"
      title="Suggestion box"
      className="fixed bottom-5 right-5 z-[999] w-[min(92vw,19rem)] rounded-2xl border border-white/55 bg-white/95 p-3 text-slate-900 shadow-[0_14px_34px_rgba(8,47,73,0.24)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(8,47,73,0.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-600/30"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-600 text-white shadow-[0_10px_22px_rgba(8,145,178,0.35)]">
          <FaCommentDots className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold leading-tight">Suggestion Box</p>
          <p className="text-xs leading-tight text-slate-600">
            Share your ideas and help us improve.
          </p>
        </div>
      </div>
    </a>
  );
};

export default FloatingSupportButton;
