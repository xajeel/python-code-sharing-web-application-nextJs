
interface ButtonProps {
    name: string;
}

const Button = (props: ButtonProps) => {
    return (
        <div><button type='submit' className="rounded-md bg-[#875bf9] px-5 py-2.5 text-sm font-medium text-white hover:scale-105 transition-all hover:bg-[#874bf9] ">{props.name}</button></div>
    )
}

export default Button