import { useState } from 'react'
import Logo from "../icons/Logo"

export default function Nav() {
    const options = ['Bremen', 'Hamburg', 'Berlin'];
    const city = localStorage.getItem('city');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        localStorage.setItem('city', e.target.value);
        window.location.reload();
    };

    return (
        <nav className="w-full h-[123px] md:h-[203px] bg-construktiv-primary text-white">
            <div className="px-[20px]  py-[14.37px] md:px-60 md:py-[43.96px]">
                <a href="/"><Logo /></a>
                <div className="flex justify-between items-center">
                    <ul className="mt-[20.38px] md:mt-[29.96px] flex gap-[20px] font-bold">
                        <li><a href="/lorem">Lorem</a></li>
                        <li><a href="/ipsum">Ipsum</a></li>
                        <li><a href="/dolor">Dolor</a></li>
                    </ul>
                    <select className="bg-construktiv-primary text-white px-4 py-2 rounded-lg ring-0" onChange={handleChange}>
                        {options.map((option, index) => (
                            <option key={index} selected={option === city}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
        </nav>
    )
}