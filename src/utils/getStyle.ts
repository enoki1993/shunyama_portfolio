import type { SerializedStyles } from '@emotion/react'

export const getStyleByBool = (
  bool: boolean,
  styles: { true: SerializedStyles; false: SerializedStyles }
) => {
  if (bool) {
    return styles.true
  } else {
    return styles.false
  }
}
