interface HeadingProps {
  children: string
  subtext?: string
}

export function HeadingText({ children, subtext }: HeadingProps) {
  return (
    <div className="space-y-0.5">
      <h2 className="font-display text-xl font-medium tracking-tight text-foreground">
        {children}
      </h2>
      {subtext && (
        <p className="text-sm text-muted-foreground">{subtext}</p>
      )}
    </div>
  )
}
