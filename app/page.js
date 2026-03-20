export default function Home() {
  return (
    <main className="min h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-4">
        Digital Infrastructure Stack
      </h1>
      <p className="text-gray-400 text-xl mb-12 text center max-w-lg">
        Built on Next.js * Deployed on Vercel * Database on Supabase
      </p>

      <div className="grid grid-cols-1 gap-4 w-full max-w-2x1">
        <div className="bg-gray-800 rounded-x1 p-6 border border-gray-700">
          <div className="text-amber-400 text-sm font-semibold mb-1"> LAYER 2 - NETWORK</div>
          <div className="text-white text-lg font-medium"> Cloudfare</div>
          <div className="text-gray-400 text-sm mt-1">CDN . WAF. DDos protection . DNS</div>
        </div>

        <div className="bg-gray-800 rounded-x1 p-6 border border-gray-700">
          <div className="text-purple-400 text-sm font-semibold mb-1"> LAYER 5 - APPLICATION<div/>
          <div className="text-white text-lg font-medium"> Next.js on Vercel</div>
          <div className=" text-gray-400 text-sm mt-1"> React frontend . API routes . server side rendering</div>
        </div>

       <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="text-cyan-400 text-sm font-semibold mb-1">LAYER 4 — DATA</div>
          <div className="text-white text-lg font-medium">Supabase</div>
          <div className="text-gray-400 text-sm mt-1">PostgreSQL · coming next</div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="text-blue-400 text-sm font-semibold mb-1">LAYER 3 — PLATFORM</div>
          <div className="text-white text-lg font-medium">Docker</div>
          <div className="text-gray-400 text-sm mt-1">Containers · coming after that</div>
        </div>
        
      </div>
</div>
      
    </main>
  )
}