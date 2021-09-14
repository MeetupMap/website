import 'tailwindcss/tailwind.css';

export default function SignIn(props) {

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-gray-800 font-bold text-6xl my-20">Meetup Map</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Sign in
      </button>
    </div>
  )
}
