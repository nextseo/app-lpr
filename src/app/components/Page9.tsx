import React from 'react'

interface pageProps {
  setPage: (test: number) => void;
}
const Page9: React.FC<pageProps> = () => {
  return (
    <div className='flex flex-col justify-center items-center'>

<p className="font-medium">Coughing/ Huffing effective ?</p>

<span className=" lex items-center gap-2 mt-2">
  <input type="checkbox"  /> Insiration phase ?
</span>

<span className="flex items-center gap-2 mt-2">
  <input type="checkbox"  /> Compression phase ?
</span>

<span className="flex items-center gap-2 mt-2">
  <input type="checkbox"  /> Expulsive phase ?
</span>

    </div>
  )
}

export default Page9