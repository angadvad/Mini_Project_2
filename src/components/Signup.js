import { useState } from "react"
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const [formData, setFormData] = useState({
        email: '', //required
        numberPlate: '', // optional
        password: '' // required
    });

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    let navigate = useNavigate(); 
    
    const routeChange = () =>{ 
      let path = `/login`; 
      navigate(path);
    }

    return (
        <div className='h-screen w-full flex flex-col justify-center bg-teal-500'>
        <form className='login-form max-w-[370px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8' onSubmit={e => handleSubmit(e)}>
            <div class="w-[300px] h-[300px] bg-transparent cursor-pointer group perspective">
                <div class="preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    <div class="absolute backface-hidden w-full h-full">
                        <h2 className='text-4xl dark:text-white font-bold text-center'><DirectionsCarFilledIcon class="scale-5 bg-teal-500 rounded-3xl"></DirectionsCarFilledIcon></h2>
                    </div>
                    <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden rounded-3xl">
                        <div class="bg-teal-500 w-full h-full text-center flex flex-col items-center justify-center scale-[2.5]">
                            <DirectionsCarFilledIcon fontSize="large"></DirectionsCarFilledIcon>
                            <p>SIGN UP</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>Email</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
                type='text' placeholder='bob@gmail.com' value={formData.email} name='email' onChange={e => handleChange(e)} ></input>
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>Number Plate</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
                type='text' placeholder='Number Plate' value={formData.numberPlate} name='numberPlate' onChange={e => handleChange(e)} ></input>
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>Password</label>
                <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
                type='text' placeholder='*******' value={formData.password} name='password' onChange={e => handleChange(e)} ></input>
            </div>
            <button type='submit' className='w-full my-2 py-2 bg-teal-500 shadow-lg hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>CREATE NEW USER</button>
            <button className='text-gray-400 py-2' onClick={routeChange}>Already have a login?</button>
        </form>
    </div>
    )
}

export default Signup