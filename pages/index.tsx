import Head from 'next/head'
import Header from '../components/Header'
import LocationCard from '../components/LocationCard'
import Menu from '../components/Menu'
import NavBar from '../components/NavBar'

type Location = {
  name: string
  path: string
  location: string
}

const locations: Array<Location> = [
  {
    name: 'Antelope Canyon',
    location: 'United States',
    path: '/images/card-1.png',
  },
  {
    name: 'Padang Noah',
    location: 'Nigeria',
    path: '/images/card-2.png',
  },
  {
    name: 'Julian Edwards',
    location: 'Australia',
    path: '/images/card-3.png',
  },
  {
    name: 'Hang Son Doong',
    location: 'Vietnam',
    path: '/images/card-4.png',
  },
]
export default function Home() {
  return (
    <div className="font-poppins text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="hidden min-h-screen w-full flex-col gap-12 bg-background bg-cover pb-32 lg:flex">
        <NavBar />
        <Menu />
        <Header />
        <div className="flex justify-center gap-8">
          {locations.map((location, idx) => {
            return (
              <LocationCard
                path={location.path}
                name={location.name}
                location={location.location}
                key={idx}
                num={idx}
              />
            )
          })}
        </div>
      </main>
      <main className="grid h-screen place-items-center bg-slate-900 lg:hidden">
        This page is only available on desktop.
      </main>
    </div>
  )
}
