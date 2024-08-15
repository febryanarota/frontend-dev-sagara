import PublicNav from "@/components/navbar/public-nav";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-white-base top-0 ">
      <PublicNav/>
      <div className="w-full h-screen max-h-[80vh] max-w-screen relative">
        <div className="h-full w-full absolute flex flex-col justify-center sm:px-36 px-5">
          <div className="">
            <p className="text-6xl">Live <span className="font-bold">Your Best</span> Life</p>
            <p className="text-6xl">Using <span className="font-bold">Your Strengths</span></p>
            <p className="max-w-[35rem] text-xl my-5">Meet some of the people who have completed the Sagara Technology and use their results to maximize their potential at work and everywhere else.</p>
            <button className="btn-primary mt-10">Get Certification</button>
          </div>

        </div>
        <Image src={`/background.jpg`} alt="splash" width={2000} height={2000} className="w-full h-full object-cover"/>
      </div>
    </div>
  );
}
