import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen">
    <div className="flex flex-col gap-5 items-center justify-center pt-20">
      <h2 className="font-bold text-6xl">Not Found!</h2>
      <p className="font-semibold text-3xl">Could not find requested resource</p>
      <button className="rounded-lg shadow-md border-2 p-3 bg-green-biterum text-md transition-transform ease-in-out duration-300 hover:scale-110">
        <Link href="/">Return Home</Link>
      </button>
      </div>
    </div>
  )
}