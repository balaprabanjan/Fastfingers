import React from 'react'

const Gallery = () => {
  return (
    <>
    <div className='container mx-auto border border-lime-500 shadow-lime-200 shadow-lg mt-52'>
    <div class="grid gap-4">
    <div>
        <img class="h-auto max-w-full rounded-lg" src="gallery1.png" alt=""/>
    </div>
    <div class="grid grid-cols-5 gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="gallery2.png" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="gallery3.png" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="gallery4.png" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="step2.png" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="step1.png" alt=""/>
        </div>
    </div>
</div>
    </div>
    </>
  )
}

export default Gallery
