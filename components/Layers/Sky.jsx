const Sky = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={800}>
      <defs>
        <linearGradient id="a" gradientUnits="userSpaceOnUse" />
        <linearGradient id="b" x1={-4} y1={766} x2={-4} y2={0} href="#a">
          <stop stopColor="#b9eddf" />
          <stop offset={1} stopColor="#365bff" />
        </linearGradient>
      </defs>
      <path
        d="M1800 766H0V0h1800z"
        style={{
          fill: "url(#b)",
        }}
      />
    </svg>
  )
  
  export default Sky