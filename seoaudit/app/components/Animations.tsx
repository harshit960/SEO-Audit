"use client"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react'

interface Animations {
  src: string;
  className: string;
}

const Animations: React.FC<Animations> = (props) => {
  return (<>
    <DotLottieReact
      src={props.src}
      loop
      autoplay
      className={props.className}
    />
  </>
  )
}

export default Animations