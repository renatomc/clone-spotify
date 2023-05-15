import { AlbumItem } from "./AlbumItem";

const albumLIst = [
{
  albumName: 'Wasting Light',
  img: '/images/image.jpeg',
},
{
  albumName: 'Teste 02',
  img: '/images/image.jpeg',
},
{
  albumName: 'Teste 03',
  img: '/images/image.jpeg',
},
{
  albumName: 'Teste 04',
  img: '/images/image.jpeg',
},
{
  albumName: 'Teste 05',
  img: '/images/image.jpeg',
},
{
  albumName: 'Teste 06',
  img: '/images/image.jpeg',
},
]

export function AlbumLIst(){
  return (
    <div className='grid grid-cols-3 gap-4 mt-4'>
      {albumLIst.map(album => (
        <AlbumItem key={album.albumName} albumName={album.albumName} img={album.img} />
      ))}
    </div>
  );
}