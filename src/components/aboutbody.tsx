import React from 'react'

function aboutbody() {
  return (
    <div>
        <div style={{paddingTop:'148px',paddingLeft:'104px',display:'flex',gap:'10px'}}>
            
            <div className='moto' style={{gap:'75px'}}>
                <div style={{fontWeight:'300',fontSize:'45px',lineHeight:'71px'}}>
                    <div >Great Product is</div>
                    <div >built by great teams</div>

                </div>
                <div style={{width:'531px',height:'58px'}} >
                    <p >We help build and manage a team of world class developers<br /> to bring your vision to life</p>

                </div>
<div>
    <button style={{backgroundColor:'#3D63EA',height:'52px',width:'172px',padding:'19px 30px 19px 30px'}}>Lets get started</button>

</div>

            </div>
            <div className='team'>
<img src="/Hero-Wrapper__image.png" alt="team" style={{height:'546px',width:'614px'}} />
            </div>


        </div>
    </div>
  )
}

export default aboutbody