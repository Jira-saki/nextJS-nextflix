import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// get key/value data as props
type Props = {
  key: string;
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
};

export default function Movie({ title, id, poster_path, release_date }: Props) {
  const imagePath = 'https://image.tmdb.org/t/p/original';

  return (
    <div>
      <b className='text-ellipsis overflow-hidden line-clamp-1'>{title}</b>
      <h2>{release_date}</h2>
      <Link href={`/movie/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
    </div>
  );
}
