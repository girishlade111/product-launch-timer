"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export function ProductInfo() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Success!",
      description: "You'll be notified when we launch.",
    })

    setEmail("")
    setIsLoading(false)
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <div className="flex items-center justify-center p-4 bg-rose-100 dark:bg-rose-900/30 rounded-lg">
            <div className="text-rose-600 dark:text-rose-500 font-semibold">Premium Quality</div>
          </div>
          <div className="flex items-center justify-center p-4 bg-rose-100 dark:bg-rose-900/30 rounded-lg">
            <div className="text-rose-600 dark:text-rose-500 font-semibold">Limited Edition</div>
          </div>
          <div className="flex items-center justify-center p-4 bg-rose-100 dark:bg-rose-900/30 rounded-lg">
            <div className="text-rose-600 dark:text-rose-500 font-semibold">Free Shipping</div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              "Subscribing..."
            ) : (
              <>
                Notify Me <Bell className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          We'll notify you when our product launches. No spam, we promise!
        </p>
      </div>

      <div className="pt-8">
        <Button variant="link" className="text-rose-600 dark:text-rose-500 group">
          Learn more about our product
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  )
}
