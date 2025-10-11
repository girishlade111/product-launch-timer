import { CountdownTimer } from "@/components/countdown-timer"
import { ProductInfo } from "@/components/product-info"

export default function Home() {
  // Set your product launch date here
  const launchDate = new Date("2025-06-15T09:00:00")

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-4xl w-full mx-auto space-y-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Our New Product is <span className="text-rose-600 dark:text-rose-500">Coming Soon</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Get ready for the most anticipated launch of the year. Sign up now to be notified when we go live.
        </p>

        <CountdownTimer targetDate={launchDate} />

        <ProductInfo />
      </div>
    </main>
  )
}
