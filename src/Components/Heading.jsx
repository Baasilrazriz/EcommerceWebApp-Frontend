import React from 'react'

function Heading(props) {
    return (
        <>
        <div className=" justify-start items-end gap-96 inline-flex">
  <div className="flex-col justify-start items-start gap-5 inline-flex">
    <div className="justify-start items-center gap-4 inline-flex">
      <div className="w-5 h-10 relative">
        <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
      </div>
      <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">{props.title}</div>
    </div>
    <div className="text-black text-4xl font-semibold font-['Inter'] leading-10 tracking-wider">{props.tagline}</div>
  </div>
 
</div>
        </>
    )
}

export default Heading
