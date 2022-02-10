import Head from 'next/head'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div className="font-poppins text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="hidden min-h-screen w-full flex-col bg-background bg-cover lg:flex">
        <NavBar />
      </main>
      <main className="grid h-screen place-items-center bg-slate-900 lg:hidden">
        This page is only available on desktop.
      </main>
    </div>
  )
}
