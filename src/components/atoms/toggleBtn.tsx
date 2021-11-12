import { keyframes } from '@mui/styled-engine'
import { css } from 'twin.macro'

const ToggleBtn = ({ openMenu, handleClick }) => (
  <button css={btn} onClick={() => handleClick()}>
    <span css={[bar, openMenu && animation(barTransform)]}></span>
    <span css={[bar2, openMenu && animation(bar2Transform)]}></span>
    <p css={text}>{!openMenu ? 'Menu' : 'Close'}</p>
  </button>
)

const btn = css`
  color: white;
  padding: 10px 6px 0;
  width: 45px;
  height: 45px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

const barTransform = keyframes`
  0% {
    transform: translate(0) rotate(0);
  }
  100% {
    transform: translate(-13px, 2px) rotate(150deg);
    width: 100%;
  }
`

const bar2Transform = keyframes`
  0% {
    transform: translateY(0) rotate(0);
  }
  100% {
    transform: translateY(-4px) rotate(-150deg);
  }
`

const animation = (keyframe) => css`
  animation: ${keyframe} 0.15s ease-out both;
`

const bar = css`
  background-color: white;
  margin-left: 40%;
  height: 1px;
  display: block;
  margin-bottom: 6px;
`

const bar2 = css`
  ${bar}
  width: 100%;
  margin-left: 0;
`

const text = css`
  font-size: 13px;
  margin-top: -4px;
  margin-bottom: 5px;
`

export default ToggleBtn
