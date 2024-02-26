/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from "react"

import { EyeIcon, EyeOffIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = `Input`

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    return (
      <div className="relative w-full flex">
        <Input
          type={showPassword ? `text` : `password`}
          className={className}
          ref={ref}
          autoComplete="current-password"
          {...props}
        />
        <div
          role="button"
          tabIndex={0}
          aria-label="Toggle password visibility"
          onClick={(e: React.BaseSyntheticEvent) => {
            e.preventDefault()
            setShowPassword(!showPassword)
          }}
          className="absolute right-0 top-0 h-10 w-10 inline-flex items-center justify-center "
        >
          {showPassword ? (
            <EyeOffIcon size={20} className="text-gray-400" />
          ) : (
            <EyeIcon size={20} className="text-gray-400" />
          )}
          <span className="sr-only">Toggle password visibility</span>
        </div>
      </div>
    )
  }
)

PasswordInput.displayName = `PasswordInput`

export { Input, PasswordInput }
