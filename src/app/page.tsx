import { AlbumLIst } from '@/components/Albums/AlbumList';
import { BackNextButtons } from '@/components/BackNextButtons';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu';
import Image from 'next/image';

export default function Home() {
  return (
   <div className="h-screen flex flex-col">
     <div className="flex flex-1">
      <Menu />
       <main className="flex-1 p-6">
        <BackNextButtons />
        <h1 className='font-semibold text-3xl mt-10'>Bom dia, Renato</h1>
        <AlbumLIst />
         <h2 className='font-semibold text-2xl mt-10'>Made for Renato Costa</h2>
         <div className='grid grid-cols-8 gap-4 mt-4'>
           <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
            <Image className='w-full' src="/images/image.jpeg" width={240} height={240} alt="Capa do álbum" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, Coin, girl in red and more</span>
           </a>
           <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
            <Image className='w-full' src="/images/image.jpeg" width={240} height={240} alt="Capa do álbum" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, Coin, girl in red and more</span>
           </a>
           <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
            <Image className='w-full' src="/images/image.jpeg" width={240} height={240} alt="Capa do álbum" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, Coin, girl in red and more</span>
           </a>
           <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
            <Image className='w-full' src="/images/image.jpeg" width={240} height={240} alt="Capa do álbum" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, Coin, girl in red and more</span>
           </a>
           <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
            <Image className='w-full' src="/images/image.jpeg" width={240} height={240} alt="Capa do álbum" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, Coin, girl in red and more</span>
           </a>
           <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
            <Image className='w-full' src="/images/image.jpeg" width={240} height={240} alt="Capa do álbum" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, Coin, girl in red and more</span>
           </a>
           <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
            <Image className='w-full' src="/images/image.jpeg" width={240} height={240} alt="Capa do álbum" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, Coin, girl in red and more</span>
           </a>
         </div>
       </main>
     </div>
    <Footer />
   </div>
  )
}
