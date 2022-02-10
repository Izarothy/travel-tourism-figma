import Head from 'next/head'

export default function Home() {
  return (
    <div className="font-poppins">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="hidden min-h-screen w-full flex-1 flex-col items-center justify-center bg-background bg-cover px-20 text-center lg:flex"></main>
      <main className="grid h-screen place-items-center bg-slate-900 text-white lg:hidden">
        This page is only available on desktop.
      </main>
    </div>
  )
}
