import { Card } from './Card'

export default function Contact() {
  return (
    <section id="contact" className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <Card className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-600">Our College</h3>
            <address className="not-italic">
              <p>A.V.C.O.E. Sangamner</p>
              <p>Amrutnagar, Ghulewadi, Sangamner</p>
              <p>maharashtra, India</p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-600">Our Team</h3>
              <p>Members:</p>
              <p>Harshal Durgude, Harshal edke </p>
              <p>Nikhil Dukre, Pratiksha Duche</p>
              <p>Mail : <a href="mailto:ecoguard.report@gmail.com" className="text-blue-500 hover:underline">
          ecoguard.report@gmail.com
        </a></p>
          </div>
        </div>
        {/* <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 text-green-600">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:underline">Facebook</a>
            <a href="#" className="text-blue-500 hover:underline">Twitter</a>
            <a href="#" className="text-blue-500 hover:underline">Instagram</a>
          </div>
        </div> */}
      </Card>
    </section>
  )
}

