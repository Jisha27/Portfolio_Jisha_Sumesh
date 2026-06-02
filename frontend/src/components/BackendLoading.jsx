const BackendLoading = () => {
  return (
    <div className="flex justify-center items-center py-12 px-4">
      <div className="relative max-w-md w-full rounded-3xl border border-[var(--primary)]/30 bg-[var(--card-bg)]/80 p-6 text-center shadow-lg overflow-hidden">
        
        <div className="absolute -top-10 -left-10 w-28 h-28 bg-[var(--primary)]/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>

        <div className="relative z-10">
          <div className="text-5xl mb-4 animate-bounce">👩‍💻</div>

          <h3 className="text-xl font-bold text-white mb-2">
            Compiling awesomeness...
          </h3>

          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
           🚀 Getting things ready...
            This may take 2–3 minutes on the first visit.
          </p>

          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">Thanks for your patience 💜</p>

          <div className="mt-5 flex justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-bounce"></span>
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-bounce delay-150"></span>
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-bounce delay-300"></span>
          </div>

          <div className="mt-5 text-xs text-[var(--primary)] animate-pulse">
            {"< waking-server />"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendLoading;