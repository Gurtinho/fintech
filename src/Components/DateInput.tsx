import { CSSProperties, ComponentProps } from "react"

type IDateInput = ComponentProps<'input'> & {
  label: string
}

const generalStyle: CSSProperties = {
  fontSize: '1rem',
  color: 'var(--color-2)',
  padding: 'var(--gap-s) .75rem',
  backgroundColor: 'var(--color-4)',
  borderRadius: 'var(--gap)'
}

const labelStyle: CSSProperties = {
  display: 'block',
  marginBottom: 'var(--gap-s)',
  fontWeight: '600',
  ...generalStyle
}

const inputStyle: CSSProperties = {
  border: 'none',
  fontFamily: 'monospace',
  cursor: 'pointer',
  ...generalStyle
}

export const DateInput: React.FC<IDateInput> = ({ label, ...props }) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={ label }>{ label }</label>
      <input style={inputStyle} id={ label } name={ label } type="date" { ...props } />
    </div>
  )
}