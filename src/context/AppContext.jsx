import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [appointmentOpen, setAppointmentOpen] = useState(false)

  return (
    <AppContext.Provider value={{
      isLoading,
      setIsLoading,
      appointmentOpen,
      setAppointmentOpen,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
