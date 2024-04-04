import React from 'react'
import useOnline from '../utills/useOnline'

const A = () => {
  const online = useOnline()
  return (
    <>
      <h2>
        user -
        {online ? (
          <img src="/images.png" alt="" width={80} />
        ) : (
          <img src="../../public/offline.png" width={80} />
        )}
      </h2>
    </>
  )
}

export default A
