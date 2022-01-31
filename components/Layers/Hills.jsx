
const Hills = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1550 400"
    width={'100%'}
    height={491}
  >
    <defs>
      <linearGradient id="a" gradientUnits="userSpaceOnUse" />
      <linearGradient
        id="c"
        x1={10.6}
        y1={412.9}
        x2={10.6}
        y2={342.4}
        href="#a"
      >
        <stop stopColor="#8eebff" />
        <stop offset={1} stopColor="#5e7af4" />
      </linearGradient>
      <clipPath clipPathUnits="userSpaceOnUse" id="b">
        <path d="M914 400H14V0h900z" />
      </clipPath>
    </defs>
    <g clipPath="url(#b)">
      <path
        d="M14.4 358.4q47.9-55.4 162.3-2.1 28.3-10.9 55.8 4.5 122 6.8 205 7.3 64.4-2.5 238.4-33.9 105.5-19 251.1-4.1 8.9 82.6 3.6 82.6-219.1.7-918.1-1.3z"
        style={{
          fill: "url(#c)",
        }}
      />
    </g>
  </svg>
)

export default Hills