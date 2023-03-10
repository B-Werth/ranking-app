import Head from "next/head";
import { type NextPage } from "next";

import { useRouter } from "next/router";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import Image from "next/image";

import { api } from "../../utils/api";
import { List } from "postcss/lib/list";

const Home: NextPage = () => {
  const router = useRouter();

  const { id } = router.query;

  const hello = api.example.content.useQuery({
    id: id as string,
  });

  console.log(hello.data?.listContent[0]?.image);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col   bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div>
          <div className="flex">
            <div className="flex min-h-screen w-1/4 rounded-md border-2 border-black bg-slate-700 ">
              <div className="flex-col   ">
                {hello.data?.listContent.map((img) => (
                  <div key={img.id} className="grid">
                    <img width={100} height={100} src={img.image}></img>
                  </div>
                ))}
              </div>
            </div>
            <div className="w w-3/4 rounded-md border-2 border-black bg-red-700">
              <div className="flex   flex-col">
                <div className=" scale-1000 bg-yellow-700  text-[85px]">1</div>
                <div className=" bg-orange-700  text-[85px]">2</div>
                <div className=" bg-orange-700  text-[85px]">3</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
