import { CSSProperties } from 'react'

const styles: CSSProperties = {
  border: 'var(--gap-s) solid var(--color-3)',
  width: 'var(--gap)',
  height: 'var(--gap)',
  borderRadius: '50%',
  borderRightColor: 'var(--color-4)',
  animation: 'spin 1s infinite'
}

export const Loading = () => {
  return (
    <div style={styles}></div>
  )
}