import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <header className='flex flex-row justify-between w-full shadow-sm border-b py-4 items-center bg-white px-8'>
            <aside>
                <Link className='font-black text-xl logo' href="/">
                    Unifika
                </Link>
            </aside>
           <nav className='hidden md:block'>
                <ul className="flex items-center justify-center gap-8">
                    <Link href="/pricing">Explore</Link>
                    <Link href="/communities">Communities</Link>
                    <Link href="/challenges">Challenges</Link>
                    <Link href="/contact">Contact</Link>
                </ul>
           </nav>
            <div className='flex items-center gap-4'>
                <Link href="/login">
                    <Button className='bg-blue-500'>Iniciar Sesión</Button>
                </Link>
                {/*<UserButton afterSignOutUrl="/" />*/}
            </div>
        </header>
    )
}

export default Navbar