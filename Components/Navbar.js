import React from 'react';
import Link from 'next/link'
import Image from 'next/Image'
function Navbar() {
    return (
        <div className="navbar">
            <h1>Gaming Vibes</h1>
            <div className="navs">
                <Link href="/"><a>Home</a></Link>
                <Link href="guides"><a>Guides</a></Link>
                <Link href="/"><a>About</a></Link>
                <Link href="/"><a>Contact</a></Link>
            </div>
        </div>
    );
}

export default Navbar;