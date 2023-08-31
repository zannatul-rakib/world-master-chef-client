

const Contact = () => {
    return (
        <div className='mx-5 lg:mx-20 my-40'>
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 flex justify-start items-center">
                    <div>
                        <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">get In touch</h4>
                        <h2 className="text-[45] lg:text-[50px] leading-none mb-12 font-semibold">
                            lets Work <br /> forever!
                        </h2>
                    </div>
                </div>
                <form className="flex-1 border rounded-2xl flex flex-col gap-y-5 p-6 items-start">
                    <input className="bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:border-accent transition-all" type="text" placeholder="Your Name" />
                    <input className="bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:border-accent transition-all" type="email" placeholder="Your Email" />
                    <textarea className="bg-transparent border-b py-10 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none" placeholder="Your Message" ></textarea>
                    <button className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;