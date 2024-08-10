import { db } from '@/db';
import Link from 'next/link';

export default async function Home() {

  const snippets = await db.snippet.findMany();

  const renderSnippets = snippets.map((snippet) => {
    return (
      <div key={snippet.id}
        className='flex justify-between items-center p-2 border rounded'
      >
        {snippet.title}
        <Link href={`/snippets/${snippet.id}`}>View</Link>
      </div>
    )
  })

  return (<div className='m-5 flex flex-col gap-4'>
    <div className='flex justify-between items-center border-b-2 py-4'>
      <h1 className='text-3xl font-medium'>Snippets</h1>
      <Link href="/snippets/new"
        className='border p-2 rounded-xl'
      >New</Link>
    </div>
    {renderSnippets}
  </div>
  );
}
