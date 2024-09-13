export default function Hero() {
    return (
        <section>
            <div className="w-full bg-construktiv-primary md:px-60 md:flex gap-10 max-h-[500px] flex-wrap md:flex-nowrap">
                <div className="flex items-center p-5 md:p-0">
                    <p className="text-construktiv-green text-[70px] max-w-1/2 leading-[70px] md:leading-[82px] "><span className="font-bold">Lorem ipsum dolor sit amet,</span> consetetur sadipscing elitr.</p>
                </div>
                <img src="heroImg.png" alt="heroImg" className="mx-auto size-[350px] md:size-[710px] rounded-lg" />
            </div>
            <div className="w-full h-48 hidden md:block"></div>
        </section>
    )
};