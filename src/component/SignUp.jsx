import Input from "./Input"

export default function SignUp() {
    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign up to DreamWatch</h1>
            <div className="Form">
                <Input type='email' label='Email' />
                <Input type='text' label='Username' />
                <Input type='password' label='Passeord' />
                <Input type='password' label='Confirm Password' />
            </div>
            <p>
                
            </p>
        </form>
    )
}