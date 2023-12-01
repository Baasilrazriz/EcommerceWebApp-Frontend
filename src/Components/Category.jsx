import React, { useState } from 'react';

function Category({category,setCategory}) {
  return (
    <div className="w-full h-full">
      <ul className='flex-col items-start gap-4 inline-flex rounded-lg bg-white pl-2 shadow-2xl w-60 py-1 border border-gray-400'>
        {category.map((cat, index) => (
          <li className="w-full text-left hover:bg-gray-50  text-black text-base font-normal font-['Poppins'] leading-normal" key={index}>
            <a href={cat.name+'.jsx'}>{cat.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
