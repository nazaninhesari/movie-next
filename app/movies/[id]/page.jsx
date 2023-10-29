const getData = async (id) => {
  const data = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, {
    cache: "no-store",
  });
  return data.json();
};

import notFound from "@/app/not-found";
import Image from "next/image";

const Single = async ({ params }) => {
  const data = await getData(params.id);
  if (!data.id) {
    return notFound();
  }
  return (
    <div className="container mx-auto flex flex-col gap-12">
      <section className="rounded-lg bg-zinc-100 p-8 flex justify-between items-start">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1>{data.title}</h1>
            <div> سال ساخت : {data.year}</div>
            <div> زمان : {data.runtime}</div>
            <div> کارگردان : {data.director}</div>
            <div> نمره IMDB : {data.imdb_rating}</div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div>خلاصه فیلم</div>
              <div>{data.plot}</div>
            </div>
            <div className="flex flex-col gap-4">
              <div>ژانر</div>
              <div className="flex justify-star items-center flex-wrap gap-4">
                {data.genres.map((item, index) => {
                  return (
                    <div
                      className="bg-zinc-300 rounded-md py-1 px-4"
                      key={index}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="rounded-3xl"
            width={250}
            height={300}
            alt={data.title}
            src={data.poster}
            priority={true}
          />
        </div>
      </section>
      <section className="flex justify-between items-center my-14">
        {data.images.map((item, index) => {
          return (
            <Image
              key={index}
              className="rounded-3xl"
              width={400}
              height={200}
              src={item}
              priority={true}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Single;
