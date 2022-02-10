import Head from 'next/head'
import Header from '../components/Header'
import Menu from '../components/Menu'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div className="font-poppins text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="hidden min-h-screen w-full flex-col gap-12 bg-background bg-cover lg:flex">
        <NavBar />
        <Menu />
        <Header />
      </main>
      <main className="grid h-screen place-items-center bg-slate-900 lg:hidden">
        This page is only available on desktop.
      </main>
    </div>
  )
}
