import { Card } from './Card'

export default function Contact() {
  return (
    <section id="contact" className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <Card className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-600">Our Office</h3>
            <address className="not-italic">
              <p>EcoGuard Organization</p>
              <p>123 Green Street, Eco City, EC 12345</p>
              <p>United States</p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-600">Get in Touch</h3>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@ecoguard.org</p>
            <p>Hours: Monday-Friday, 9am-5pm EST</p>
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

