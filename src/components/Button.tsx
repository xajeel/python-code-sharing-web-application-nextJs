
interface ButtonProps {
    name: string;
}

const Button = (props: ButtonProps) => {
    return (
        <div><button type='submit' className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700">{props.name}</button></div>
    )
}

export default Button