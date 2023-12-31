import Image from "next/image";
import Link from "next/link";
const getData = async () => {
  const data = await fetch("https://moviesapi.ir/api/v1/movies?page={page}", {
    cache: "no-store",
  });
  return data.json();
};

const Home = async () => {
  const data = await getData();

  return (
    <main className="flex flex-col gap-8 container mx-auto">
      <div className="text-center text-2xl text-blue-500"> صفحه اصلی </div>
      <div className="flex justify-between items-center flex-wrap">
        {data.data.map((mov, index) => {
          return (
            <Link
              href={`/movies/${mov.id}`}
              className=" relative h-[32rem] w-72 border-2 border-zinc-300 rounded-2xl p-4 my-10"
              key={index}
            >
              <div className="flex justify-between items-center">
                <Image
                  className="rounded-lg"
                  width={250}
                  height={260}
                  alt={mov.title}
                  src={mov.poster}
                />
              </div>
              <h3>{mov.title}</h3>
              <div className="absolute bottom-2 right-2 left-2 flex justify-between items-center">
                <div className="px-3 py-1 bg-zinc-200 rounded-md">
                  {mov.year}
                </div>
                <div className="px-3 py-1 bg-zinc-200 rounded-md">
                  {mov.country}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
