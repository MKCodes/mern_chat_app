import Avatar from '../../assets/avatar.svg'
import Input from '../../components/Input'

const Dashboard = () => {
    const contacts = [
        {
            name: 'Sentinel',
            status: 'Available',
            img: Avatar
        },

        {
            name: 'Zayn',
            status: 'Available',
            img: Avatar
        },

        {
            name: 'Resc',
            status: 'Available',
            img: Avatar
        },

        {
            name: 'Mo',
            status: 'Available',
            img: Avatar
        },

        {
            name: 'Rosaltic',
            status: 'Available',
            img: Avatar
        },

        {
            name: 'Nancy',
            status: 'Available',
            img: Avatar
        }
    ]
	return (
		<div className='w-screen flex'>
			<div className='w-[25%] h-screen bg-secondary'>
				<div className='flex items-center my-8 mx-14'>
					<div><img src={Avatar} width={75} height={75} className='border border-primary p-[2px] rounded-full' /></div>
					<div className='ml-8'>
						<h3 className='text-2xl'>React Chat Room</h3>
						<p className='text-lg font-light'>My Account</p>
					</div>
        </div>
        <hr/>
        <div className='mx-14 nt-10'>
           <div className='text-primary text-lg'> Messages </div>
           <div>
            {
                contacts.map(({name, status, img}) => {
                    return(
                        <div className='flex items-center py-8 border-b border-b=gray-300'>
                            <div className='cursor-pointer flex items-center'>
                        <div><img src={img} width={60} height={60} /></div>
                        <div className='ml-6'>
                            <h3 className='text-lg font-semibold'>{name}</h3>
                            <p className='text-sm font-light text-gray-600'>{status}</p>
                     </div>
                     </div>
                </div>
                    )
                })
            }
    
           </div>
        </div>
    </div>
        <div className='w-[50%] h-screen bg-white flex flex-col items-center' >
        <div className='w-[75%] bg-secondary h-[80px] my-14 rounded-full flex items-center px-14 '>
            <div className='cursor-pointer'><img src={Avatar} width={60} height={75} /></div>
            <div className='ml-6 mr-auto'>
                    <h3 className='text-lg ml-6'>Sentinel</h3>
                    <p className='text-sm font-light text-gray-600'>online</p>
                </div>
                <div className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-outgoing" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                <path d="M15 9l5 -5"></path>
                <path d="M16 4l4 0l0 4"></path>
                </svg>
                </div>
            </div>
            <div className='h-[75%] w-full overflow-scroll shadow-sm overflow-x-hidden'>
                <div className='p-14'>
                    <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        woof woof woof woof woof woof woof woof woof woof woof woof woof woof.
                    </div>
                    <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tr-xl ml-auto p-4 text-white mb-6'>
                        meow meow meow meow meow meow meow meow meow meow meow meow meow.
                    </div>
                    <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        woof woof woof woof woof woof woof woof woof woof woof woof woof woof.
                    </div>
                    <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tr-xl ml-auto p-4 text-white mb-6'>
                        meow meow meow meow meow meow meow meow meow meow meow meow meow.
                    </div>
                    <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        woof woof woof woof woof woof woof woof woof woof woof woof woof woof.
                    </div>
                    <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tr-xl ml-auto p-4 text-white mb-6'>
                        meow meow meow meow meow meow meow meow meow meow meow meow meow.
                    </div>
                </div>
            </div>
            <div className='p-14 w-full flex items-center'>
            <Input placeholder='Type a message...' className='w-full' inputClassName='p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none' />
            <div className='ml-4 p-4 cursor-pointer bg-light rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 14l11 -11"></path>
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                </svg>
            </div>
            <div className='ml-4 p-4 cursor-pointer bg-light rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M9 12h6"></path>
                <path d="M12 9v6"></path>
                </svg>
            </div>
            </div>
         </div>
        <div className='w-[25%] h-screen bg-secondary '>
        </div>
     </div>
    )
}

export default Dashboard