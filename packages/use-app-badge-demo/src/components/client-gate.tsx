import { useSyncExternalStore } from "react"

const emptySubscribe = () => () => {}
export const ClientGate: React.FC<{ children: () => React.ReactNode }> = ({ children }) => {
  const isServer = useSyncExternalStore(
    emptySubscribe,
    () => false,
    () => true
  )
  return isServer ? null : children()
}