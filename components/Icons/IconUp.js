import * as React from "react"

export default function IconIconUp(props) {
  return (
    <>
      <svg width={8} height={8} {...props}>
        <path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z" />
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