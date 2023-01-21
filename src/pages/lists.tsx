import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import { list } from "postcss";

const Lists: NextPage = () => {
  const ListsFetch = api.example.allLists.useQuery().data;

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-indigo-500 shadow">
        <p></p>
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Lists: Moin
          </h1>
        </div>
      </header>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {ListsFetch
                ? ListsFetch.map((Liste) => (
                    <div key={Liste.name} className="group relative">
                      <div className="sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
                        <img
                          src={Liste.listcontentpack?.image}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <h3 className="mt-6 text-sm text-gray-500">
                        <Link href={"/list/" + Liste.id}>
                          <span className="absolute inset-0" />
                          {Liste.name}
                        </Link>
                      </h3>
                    </div>
                  ))
                : "loading"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lists;
