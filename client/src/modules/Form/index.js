import Input from "../Input"

const Form = () => {
    return (
        <div className="bg-white w-[600px] h-[750px] shadow-lg rounded-lg flex flex-col justify-center items-center">
            <div class="text-4xl font-extrabold"> Welcome </div>
            <div class="text-xl font-light mb-14"> Sign up now to get started </div>
            <Input label="Full name" name="name" placeholder="Enter your full name" className="w-1/2 mb-6"/>
            <Input label="Email address" name="email" placeholder="Enter your email" className="w-1/2 mb-6"/>
            <Input label="Password" type="password" name="password" placeholder="Enter your Password" className="w-1/2 mb-6"/>
        </div>
    )
}
export default Form