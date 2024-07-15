import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black">
      <div className="flex min-w-full p-10 bg-custom-purple flex-row">
        <p className="text-xl font-bold hover:text-custom-yellow">Hi</p>
      </div>
      <h1 className="text-4xl font-bold hover:text-red-700 cursor-pointer">Hello, I'm John Doe</h1>

      <div className="flex flex-row mt-96"> About me</div>
      <div className="flex flex-row mt-96"> Work experience</div>
      <div className="flex flex-row mt-96"> Projects</div>
      <div className="flex flex-row mt-96"> Organizations</div>
      <div className="flex flex-row mt-96"> Contact</div>
    </main>
  );
}
