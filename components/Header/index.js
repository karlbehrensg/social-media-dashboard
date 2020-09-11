export default function Header () {
  return (
    <>
      <header>
        <p>Header</p>
      </header>

      <style jsx>{`
        header {
          display: grid;
          align-content: center;
          height: 120px;
          border-bottom: red solid;
          width: 100%;
        }
      `}</style>
    </>
  )
}