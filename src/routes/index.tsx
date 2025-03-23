import { createFileRoute, Outlet } from "@tanstack/react-router"
import { useState } from "react"

function RouteComponent() {
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true"
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "pass") {
      localStorage.setItem("isLoggedIn", "true")
      setIsLoggedIn(true)
    }
  }
  if (isLoggedIn) {
    return (
      <>
        <Outlet />
      </>
    )
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full space-y-4 p-8 bg-gray-800 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Enter your password"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
})
