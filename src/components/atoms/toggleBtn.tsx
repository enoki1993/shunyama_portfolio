import { css } from 'twin.macro'

const ToggleBtn = ({ openMenu, handleClick }) => (
  <button css={toggleBtnStyle} onClick={() => handleClick()}>
    <span css={toggleBtnBarStyle}></span>
    <span css={toggleBtnBarStyle}></span>
    <p css={toggleBtnTextStyle}>Menu</p>
  </button>
)

const toggleBtnStyle = css`
  color: white;
  padding: 10px 6px 0;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const toggleBtnBarStyle = css`
  background-color: white;
  width: 100%;
  height: 1px;
  display: block;
  margin-bottom: 6px;
  &:nth-child(1) {
    width: 60%;
    margin-left: 40%;
  }
`

const toggleBtnTextStyle = css`
  font-size: 13px;
  margin-top: -4px;
  margin-bottom: 5px;
`

export default ToggleBtn
