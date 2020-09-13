import * as React from "react"

export default function Down(props) {
  return (
    <>
      <svg width={8} height={4} {...props}>
        <path fill="#DC414C" fillRule="evenodd" d="M0 0l4 4 4-4z" />
      </svg>
      
      <style jsx>{`
        svg {
          width: 8px;
          height: 8px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          margin-top: 6px;
        }
      `}</style>
    </>
  )
}
