'use client'
import { useSearchParams } from 'next/navigation';

export default function Purchase() {
  const searchParams = useSearchParams();
  const image = searchParams.get('image');
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const price = searchParams.get('price');

  return (
    <div className='p-12'>
      <h1>Purchase</h1>
      <p>This page contains purchase page contents.</p>
      <div className="relative h-full">
        {image && <img src={image} alt={title} className="absolute object-cover w-full h-full rounded-lg" />}
      </div>
      <div className=''>
        <h2 className="leading-none text-2xl font-bold">{title}</h2>
        <p className="">{description}</p>
        <p className="">{price}</p>
      </div>
    </div>
  );
}
