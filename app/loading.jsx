import Image from "next/image";

const loading = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <Image width={150} height={150} alt="is loading" src={"/loading.svg"} />
    </div>
  );
};

export default loading;
