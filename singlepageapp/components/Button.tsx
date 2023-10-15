import Image from 'next/image';
import React from 'react'
type ButtonProps = {
    type: 'Button' | 'Submit' | 'Reset';
    title: string
    icon?: string
    variant: "btn_dark_green"

}

const Button = ({type , title , icon , variant}:ButtonProps) => {
  return (
    <button type="button" className={`flexCenter gap-3 rounded-full border ${variant}`}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className='bold-16 whitespace-nowrap' >{title}</label>
    </button>
  )
}

export default Button
