import { Button } from "@/components/ui/button"
import Image from "next/image"
import { headers } from "next/headers"

export default function SeniorSafetyLanding() {
  // Force dynamic rendering so deadline is computed per request
  headers()

  const now = new Date()
  const deadline = new Date(now.getTime() + 48 * 60 * 60 * 1000)
  const deadlineDateLabel = deadline.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  })
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900">
      {/* Top Banner */}
      <div className="bg-slate-600 py-1 px-3">
        <div className="flex items-center justify-center gap-1 text-white text-xs">
          <span className="text-sm">🇺🇸</span>
          <span>An official website of the Senior Safety Initiative</span>
        </div>
      </div>

      {/* Header Section */}
      <div className="px-3 py-3">
        <div className="bg-slate-700/50 rounded-lg p-3 border border-black">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ssi.jpg-Xli4zVcEVVt3ZuL2dGialIUddxrjQk.jpeg"
                  alt="Senior Safety Initiative Official Seal"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-white text-sm font-bold leading-tight">Senior Safety Initiative</h1>
                <p className="text-slate-300 text-xs font-semibold">OFFICIAL PROGRAM</p>
              </div>
            </div>
            <div className="text-right text-white text-xs leading-tight">
              <p>Program ID: DOG-24-5000</p>
              <p>Authorized by: Senior Recovery Act</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-3 text-center">
        {/* Urgent Headline */}
        <div className="mb-4">
          <h2 className="text-white text-xl font-bold mb-2 leading-tight">
            BREAKING: Check If You Qualify for a
            <br />
            Medical Alert Device
          </h2>
        </div>

        {/* Eligibility Section */}
        <div className="bg-slate-700/30 rounded-lg p-4 mb-4 border border-black">
          <h3 className="text-white text-lg font-bold mb-3">You may be eligible for a Medical Alert Device </h3>
          <p className="text-slate-300 text-sm mb-4">
            The Senior Safety Initiative is offering qualified seniors medical alert devices with 24/7 monitoring for
            emergency protection as well as subsidized professional monitoring services through their partnership with
            My Connected Caregiver. This offering is only available while funding remains.
          </p>

          <h4 className="text-white text-base font-bold mb-2">Next Steps:</h4>
          <p className="text-slate-300 text-sm mb-4">
            Call now to find out if you qualify for a Medical Alert Device &amp; subsidized monthly monitoring.
          </p>

          {/* CTA Button */}
          <a
            href="tel:+18888701225"
            className="inline-block w-full"
            role="button"
            aria-label="Call 888-870-1225 to check eligibility for medical alert device"
          >
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 animate-cta-pop active:scale-95 touch-manipulation">
              📞 Call (888) 870-1225 Now
            </Button>
          </a>
        </div>

        {/* Device Options */}
        <div className="mb-4">
          <h4 className="text-white text-base font-bold mb-3">Choose Your Device Style:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-slate-700/20 rounded-lg p-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/579d8f65-ccf4-4eea-bcd6-caf63b8838c8-jsOH0bBkmLF616E10EAeLQoaUdXusM.png"
                alt="Medical Alert Pendant Device with blue emergency button and lanyard"
                width={300}
                height={200}
                className="mx-auto rounded-lg w-full max-w-sm mb-2 object-cover"
              />
              <p className="text-slate-300 text-sm text-center">Safety Pendant </p>
            </div>
            <div className="bg-slate-700/20 rounded-lg p-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smartwatch-Front-View.png-EBFQTMfnwopXivI4x8TEEp4laa86mB.jpeg"
                alt="Smart Medical Alert Watch with GPS and health monitoring"
                width={300}
                height={200}
                className="mx-auto rounded-lg w-full max-w-sm mb-2 object-cover"
              />
              <p className="text-slate-300 text-sm text-center">Smart Alert Watch</p>
            </div>
          </div>
          <p className="text-slate-400 text-xs mt-3 italic text-center">
            All devices include 24/7 professional monitoring for a fee.
          </p>
        </div>

        {/* Subsidized Monitoring - Pricing Comparison */}
        <div className="mb-6">
          <div className="bg-slate-700/30 rounded-xl border border-slate-600/40 p-5 md:p-6">
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true"></span>
                <span className="text-emerald-300 text-xs font-semibold uppercase tracking-wide">
                  Subsidized Monthly Monitoring
                </span>
              </div>
              <h3 className="text-white text-lg md:text-xl font-bold mt-3">
                Eligible seniors receive subsidized professional monitoring with our My Connected Caregiver Partnership
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Typical Provider (Single) */}
              <div className="rounded-lg bg-slate-800/60 border border-slate-600/50 p-4 text-center">
                <div className="text-slate-300 text-xs mb-1">Typical Provider</div>
                <div className="text-white text-3xl font-extrabold tracking-tight">$60+</div>
                <div className="text-slate-400 text-xs">per month</div>
              </div>

              {/* My Connected Caregiver (highlighted, centered) */}
              <div className="rounded-lg bg-emerald-500/10 border border-emerald-400/40 p-4 text-center relative overflow-hidden shadow-sm">
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
                <div className="text-emerald-200 text-xs mb-1">My Connected Caregiver</div>
                <div className="text-white text-3xl font-extrabold tracking-tight">
                  $1.33
                  <span className="align-top text-base">/day</span>
                </div>
                <div className="text-emerald-200 text-xs">includes all add-ons</div>
                <div className="mt-2 inline-flex items-center gap-1 text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-full text-[11px] font-semibold mx-auto">
                  <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full" aria-hidden="true"></span>
                  No contracts
                </div>
              </div>

              {/* Life Alert */}
              <div className="rounded-lg bg-slate-800/60 border border-slate-600/50 p-4 text-center">
                <div className="text-slate-300 text-xs mb-1">Life Alert</div>
                <div className="text-white text-3xl font-extrabold tracking-tight">
                  $105
                  <span className="align-top text-base">/mo</span>
                </div>
                <div className="text-slate-400 text-xs">all-in pricing</div>
                <div className="mt-2 inline-flex items-center gap-1 text-red-300 bg-red-500/10 px-2 py-0.5 rounded-full text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 bg-red-300 rounded-full" aria-hidden="true"></span>
                  3-year contract required
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 mt-4 text-center">
              Rates shown are typical market ranges for comparable services. Competitor pricing (e.g., Life Alert) is
              based on publicly available information and may vary by plan and region.
            </p>
          </div>
        </div>

        {/* Funding Status Bar - Moved to Bottom */}
        <div className="mb-6">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-6 border border-yellow-500/20 shadow-lg">
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 px-3 py-1 rounded-full mb-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wide">Program Status</span>
              </div>
              <h3 className="text-white text-lg font-bold">Funding Remaining</h3>
              <p className="text-slate-300 text-sm">Fiscal Year 2025 Senior Recovery Act Allocation</p>
              <div className="mt-3 inline-flex items-center gap-2 bg-red-500/10 px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" aria-hidden="true"></span>
                <span className="text-red-300 text-xs font-semibold">
                  Funding projected to end on{" "}
                  <time dateTime={deadline.toISOString().split("T")[0]}>{deadlineDateLabel}</time>
                </span>
              </div>
            </div>

            <div className="max-w-md mx-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-400 text-xs">Allocated</span>
                <span className="text-yellow-400 text-sm font-bold">9% Available</span>
                <span className="text-slate-400 text-xs">$7.8M Total</span>
              </div>
              <div className="w-full bg-slate-600/50 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-red-500 to-red-400 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: "9%" }}
                ></div>
              </div>
              <p className="text-center text-slate-400 text-xs mt-3">Program closes when funding is exhausted</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-700/30 rounded-lg p-4 mb-8 border border-black">
          <h4 className="text-white text-base font-bold mb-2">Speak with an Eligibility Specialist</h4>
          <p className="text-slate-300 text-sm mb-4">
            Call now to check eligibility and reserve your device while funding remains.
          </p>
          <a
            href="tel:+18888701225"
            className="inline-block w-full"
            role="button"
            aria-label="Call 888-870-1225 to check eligibility for medical alert device"
          >
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 animate-cta-pop active:scale-95 touch-manipulation">
              {"📞 Call (888) 870-1225 Now"}
            </Button>
          </a>
        </div>

        {/* Official-looking Footer */}
        <footer className="bg-slate-900/90 backdrop-blur border-t border-slate-700/60 rounded-xl p-5 md:p-6">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ssi.jpg-Xli4zVcEVVt3ZuL2dGialIUddxrjQk.jpeg"
                alt="Senior Safety Initiative Official Seal"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
              <div className="text-left">
                <p className="text-slate-200 text-sm font-semibold">Senior Safety Initiative</p>
                <p className="text-slate-400 text-xs">
                  Program ID: DOG-24-5000 • Authorized by the Senior Recovery Act
                </p>
              </div>
            </div>
            <div className="text-slate-500 text-[11px] text-center sm:text-right leading-tight">
              <p>This informational site is for awareness and qualification screening.</p>
              <p>No contracts required. © 2025 Senior Safety Initiative.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
