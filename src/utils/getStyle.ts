import type { SerializedStyles } from '@emotion/react'

export const getStyleByBool = (bool: boolean, styles: SerializedStyles[]) => {
  if (bool) {
    return styles[0]
  } else {
    return styles[1]
  }
}
