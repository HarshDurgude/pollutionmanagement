import Header from '@/components/Header'
import Stats from '@/components/Stats'
import Techniques from '@/components/Techniques'
import Resources from '@/components/Resources'
import Report from '@/components/Report'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-100 text-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8 ">
        <Stats />
        <Techniques />
        <Resources />
        <Report />
        <Contact />
      </main>
    </div>
  )
}

