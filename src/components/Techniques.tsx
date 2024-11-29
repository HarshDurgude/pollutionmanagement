import { Card } from './Card'

export default function Techniques() {
  const techniques = [
    {
      title: "Renewable Energy",
      description: "Switch to solar, wind, or hydroelectric power to reduce reliance on fossil fuels."
    },
    {
      title: "Waste Management",
      description: "Implement proper waste segregation, composting, and recycling practices."
    },
    {
      title: "Reduce Plastic Use",
      description: "Opt for reusable bags, bottles, and containers to minimize single-use plastics."
    },
    {
      title: "Sustainable Transportation",
      description: "Use public transit, carpool, bike, or walk to reduce vehicle emissions."
    },
    {
      title: "Water Conservation",
      description: "Install water-efficient fixtures and appliances, fix leaks promptly."
    },
    {
      title: "Green Spaces",
      description: "Plant trees and create urban gardens to improve air quality and biodiversity."
    }
  ]

  return (
    <section id="techniques" className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Pollution Reduction Techniques</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techniques.map((technique, index) => (
          <Card key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-green-600">{technique.title}</h3>
            <p>{technique.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

