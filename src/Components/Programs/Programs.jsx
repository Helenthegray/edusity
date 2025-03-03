import React from 'react'
import './Programs.css'
const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src='data:image/jpeg;base64,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'/>
        <div className="caption">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlBAwt5Le6qhvTBvMg3K3ih8SYvqtKnG3bhQ&s'/>
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1LGut8FWvVUrlN6-RF47yxh1zUXfAOqWroQ&s'/>
        <div className="caption">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2wcI8ea5P4AuFM37k2HC6Oqi9poYA2Tgyw&s'/>
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4H25wzeTEGmFZN1DtPKX31TAAKMpfv8bebQ&s'/>
        <div className="caption">
          <img src='https://banner2.cleanpng.com/20180501/ixe/avdcmqndp.webp'/>
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
