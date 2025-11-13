import Animate from "@/components/animate"
import { Suspense } from "react"


export default function Template({ children }: { children: React.ReactNode }) {
  return (
      <Animate>
        <Suspense fallback={<div style={{ width: '100vw', height: '100vh' }}/>}>
          {children}
        </Suspense>
      </Animate>
  )
}
