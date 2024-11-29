import { Card } from './Card'

export default function Stats() {
  const stats = [
    {
      title: "Marine Life Impact",
      description: "Over 1 million seabirds and 100,000 sea mammals are killed by pollution every year."
    },
    {
      title: "Air Pollution Health Risk",
      description: "People living in areas with high levels of air pollutants have a 20% higher risk of death from lung cancer."
    },
    {
      title: "Water Scarcity",
      description: "Over 1 billion people worldwide lack access to safe drinking water."
    },
    {
      title: "Ocean Pollution",
      description: "14 billion pounds of garbage are dumped into the ocean every year."
    },
    {
      title: "Plastic Waste",
      description: "Only 9% of all plastic waste ever produced has been recycled."
    },
    {
      title: "Air Quality",
      description: "9 out of 10 people worldwide breathe polluted air."
    }
  ]

  return (
    <section id="stats" className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Shocking Pollution Facts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-green-600">{stat.title}</h3>
            <p>{stat.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

