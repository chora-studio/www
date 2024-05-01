'use client'

const defaultColor = '#00C3A5'

const BlankArrow = ({ color }: any) => {
  const stroke = color || defaultColor

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="0.5em"
      width="0.5em"
      viewBox="0 0 20 20"
      style={{ marginLeft: '0.5em' }}
    >
      <line
        x1="0"
        y1="10"
        x2="20"
        y2="10"
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth="3"
      />
      <line
        x1="12"
        y1="3"
        x2="20"
        y2="10"
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth="3"
      />
      <line
        x1="20"
        y1="10"
        x2="12"
        y2="17"
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth="3"
      />
    </svg>
  )
}

export default BlankArrow
