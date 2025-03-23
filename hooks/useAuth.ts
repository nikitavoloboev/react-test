import { useState } from "react"

export function useAuth() {
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
  return {
    isLoggedIn,
    password,
    setPassword,
    handleSubmit,
  }
}
