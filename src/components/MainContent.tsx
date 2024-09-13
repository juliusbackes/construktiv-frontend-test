export default function MainContent() {
    return (
        <>
        <section className="mt-10 md:mt-24 mx-4 md:max-w-[710px] md:mx-auto">
            <h1 className="text-construktiv-green text-[35px]"><span className="font-bold">Lorem ipsum dolor sit amet,</span> consetetur sadipscing elitr.</h1>
            <p className="mt-10 leading-[28px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <span className="font-bold">Stet clita kasd gubergren,</span> no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>                
        </section>
        <section className="mt-10">
    
            <div className="flex flex-wrap md:flex-nowrap justify-center">
                <div className="md:max-w-[710px] md:h-[566px] rounded-lg bg-construktiv-green text-white p-10 text-xl md:text-3xl mx-auto leading-[38px] !m-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore <span className="font-bold">et dolore magna aliquyam erat, sed diam voluptua.</span> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</div>
                    <div className="md:max-w-[710px] md:h-[566px] rounded-lg bg-construktiv-primary text-white p-10 text-xl md:text-3xl mx-auto leading-[38px] !m-6">
                        <h1 className="text-construktiv-green md:text-3xl"><span className="font-bold">Lorem ipsum dolor sit amet,</span> consetetur sadipscing elitr.</h1>
                        <form action="" className="mt-3">
                            <input type="text" className="w-full h-10 px-6 py-5 border-2 rounded-lg text-[16px]" placeholder="Name" />
                            <input type="email" className="w-full h-10 px-6 py-5 border-2 rounded-lg text-[16px] mt-3" placeholder="Email" />
                            <textarea name="msg" id="msg" placeholder="Nachricht" className="w-full h-40 px-6 py-3 border-2 rounded-lg text-[16px] mt-3"></textarea>
                            <div className="flex gap-4 items-center">
                                <input type="checkbox" name="checkbox" id="checkbox" className="" />
                                <p className="text-[16px]">Einwilligung zur Datenverarbeitung*</p>
                            </div>
                            <button type="submit" className="bg-[#FF6F4B] text-[16px] font-bold px-5 py-2 rounded-lg">Jetzt absenden!</button>
                        </form>
                    </div>
            </div>
        </section>
        </>
    )
}
