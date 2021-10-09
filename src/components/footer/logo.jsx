import React from 'react'

function Logo(props) {
  const title =
    props.title || 'Home | 8 группа JavaScript Junior Frontend Developer'

  return (
    <svg
      height={props.size}
      width={props.size}
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>{title}</title>
      <g fill='#61dafb'>
        <path d='M38 8h-8L14.21 33.26 9 24l9-16h-8L1 24l9 16h8l15.79-25.26L39 24l-9 16h8l9-16z' />
      </g>
    </svg>
  )
}

export default Logo
