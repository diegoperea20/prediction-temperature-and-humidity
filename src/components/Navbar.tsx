import Link from 'next/link';
import { Atom } from 'lucide-react';
import ThemeToggle from './ThemeToggle'

const Navbar = async() => {
  return (
    <div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0 dark:bg-black'>
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <Atom/>
        </Link>
        <div className="flex items-center gap-4">
        <ThemeToggle/>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
