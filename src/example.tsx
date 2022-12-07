import {ReactNode} from 'react'

import {huge} from './example.css'

export interface ExampleProps {
  children: ReactNode
}

export function Example({children}: ExampleProps) {
  return <div className={huge}>{children}</div>
}
