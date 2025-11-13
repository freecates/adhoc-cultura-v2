import Animate from "@/components/animate"


export default function Template({ children }: { children: React.ReactNode }) {
  return (
      <Animate>
          {children}
      </Animate>
  )
}
