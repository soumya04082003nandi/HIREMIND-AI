import { BrainCircuit, FileText } from "lucide-react";

const GeneratePdfLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]/70 backdrop-blur-md">

      <div className="relative w-105 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">

        {/* glow effects */}
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative z-10">

          {/* top animation */}
          <div className="flex justify-center">

            <div className="relative flex h-24 w-24 items-center justify-center">

              {/* outer ring */}
              <div className="absolute inset-0 rounded-full border-[3px] border-pink-500/20 border-t-pink-500 animate-spin" />

              {/* inner ring */}
              <div className="absolute inset-3 rounded-full border-[3px] border-purple-500/20 border-b-purple-400 animate-[spin_2s_linear_infinite_reverse]" />

              {/* center icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-pink-500 to-purple-600 shadow-lg shadow-pink-500/30">
                <FileText className="h-6 w-6 text-white" />
              </div>

            </div>

          </div>

          {/* title */}
          <div className="mt-8 text-center">

            <h2 className="text-2xl font-bold tracking-tight text-white">
              Generating Resume
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              AI is analyzing your interview report and building an ATS-optimized resume tailored to the job role.
            </p>

          </div>

          {/* processing cards */}
          <div className="mt-8 space-y-4">

            <div className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-md">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10">
                  <BrainCircuit className="h-5 w-5 text-pink-400" />
                </div>

                <div className="flex-1">

                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white">
                      Optimizing ATS keywords
                    </p>

                    <span className="text-xs text-pink-400">
                      Processing
                    </span>
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">

                    <div className="h-full w-1/2 rounded-full bg-linear-to-r from-pink-500 to-purple-500 animate-[loading_1.4s_ease-in-out_infinite]" />

                  </div>

                </div>

              </div>

            </div>

            <div className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-md">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
                  <FileText className="h-5 w-5 text-purple-400" />
                </div>

                <div className="flex-1">

                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white">
                      Creating professional layout
                    </p>

                    <span className="text-xs text-purple-400">
                      Rendering
                    </span>
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">

                    <div className="h-full w-2/3 rounded-full bg-linear-to-r from-purple-500 to-pink-500 animate-pulse" />

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* footer */}
          <p className="mt-8 text-center text-xs tracking-wide text-gray-500">
            This may take a few seconds
          </p>

        </div>

      </div>

      <style>
        {`
          @keyframes loading {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(250%);
            }
          }
        `}
      </style>

    </div>
  );
};

export default GeneratePdfLoader;