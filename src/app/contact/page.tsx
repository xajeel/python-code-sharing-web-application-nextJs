import Button from "@/components/Button"

const page = () => {
    return (
        <section className="flex flex-col gap-4 mx-auto w-full md:w-1/2">
            <div className="mx-auto items-center">
                <h1 className="font-bold text-2xl my-2">Contact Us</h1>
            </div>
            <div className="mx-auto md:mx-auto items-center">
                <p className="font-bold text-normal">For any Queries, Please Contat Us <a href="#" /></p>
            </div>
            <div>
                <form className="flex flex-col">
                    <div className="gap-4 my-3" >
                        {/* <label className="w-12 font-normal" htmlFor="title">Name</label> */}
                        <input className="w-full border rounded bg-gray-50 p-2 my-1" id="name" placeholder="Name" name="name" />
                    </div>
                    <div className="gap-4 my-3">
                        {/* <label className="w-12 font-bold" htmlFor="title">Email</label> */}
                        <input className="w-full border rounded bg-gray-50 p-2 my-1" id="email" placeholder="Email" name="email" />
                    </div>
                    <div className="gap-4 my-3">
                        {/* <label className="w-12 font-bold" htmlFor="title">Message</label> */}
                        <textarea className="w-full border rounded bg-gray-50 p-5 my-1" id="message" placeholder="Message" name="message" />
                    </div>
                    <div className="gap-4 my-3">
                        <Button name='Send' />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default page