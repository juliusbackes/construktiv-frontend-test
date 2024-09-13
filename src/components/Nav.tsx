import Logo from "../icons/Logo"

export default function Nav() {
    return (
        <nav className="w-full h-[123px] md:h-[203px] bg-construktiv-primary text-white">
            <div className="px-[20px]  py-[14.37px] md:px-60 md:py-[43.96px]">
                <a href="/"><Logo /></a>
                <ul className="mt-[20.38px] md:mt-[29.96px] flex gap-[20px] font-bold">
                    <li><a href="/lorem">Lorem</a></li>
                    <li><a href="/ipsum">Ipsum</a></li>
                    <li><a href="/dolor">Dolor</a></li>
                </ul>
            </div>
        </nav>
    )
}