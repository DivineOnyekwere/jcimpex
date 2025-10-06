import companyLogo from '../assets/jcimpex-logo.png'

const Logo = () => {
    return(
       <div className='flex items-center gap-4 text-[rgba(3,5,122,0.97)]'> 
        <img src={companyLogo} alt="impex-log" width={60}  className='cursor-pointer'/>

            <div className='flex flex-col justify-center  text-[rgba(3,5,122,0.97)]'>
                <h1 className='text-2xl'>JC Impex Nigeria Limited</h1>
                <p>Efficiency. Integrity. Excellence.y</p>
            </div>
       </div>
               
        
    )
}

export default Logo;