import React from 'react'

function Heading(props) {
    return (
        <>
        <div className=" justify-start items-end gap-96 inline-flex">
  <div className="flex-col justify-start items-start gap-5 inline-flex">
    <div className="justify-start items-center gap-4 inline-flex">
      <div className="w-5 h-10 relative">
        <div className="w-4 h-12 left-0 top-0 absolute bg-red-500 rounded" />
      </div>
      <div className="text-red-500 relative top-1 text-2xl font-semibold font-['Poppins'] leading-tight">{props.title}</div>
    </div>
    
  </div>
 
</div>
        </>
    )
}

export default Heading
