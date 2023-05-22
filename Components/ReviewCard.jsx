import React, { useState} from "react";
import Button from "./Button";
import Image from '../images/icon-star.svg'

export default function ReviewCard() {
    const [choice, setChoice] = useState(null);
    return (
      <div className='h-96 border rounded-xl bg-slate-900 border-black w-full'>
        <div className='w-5/6 mx-auto my-2 pt-2 space-y-4'>
          <div className='rounded-full  bg-slate-800 w-10 pt-3 h-10'>
            <img src={Image} alt='star' className='mx-auto'/>
          </div> 
          <h1 className=' text-left text-xl text-white'>How did we do?</h1>
          <p className='text-left text-slate-500'>Please let us know how we did
            with your support request. All feedback
            is appreciated to help us improve our offering!
          </p>
          <div className='flex space-x-4 w-full'>
            <Button number={1} onClick={setChoice(number)}/>
            <Button number={2}/>
            <Button number={3}/>
            <Button number={4}/>
            <Button number={5}/>
          </div>
          <button type='submit' className='w-full rounded-full h-10 text-lg text-white bg-orange-500 hover:bg-orange-600'>Submit</button>
        </div>
      </div>
    )
  }