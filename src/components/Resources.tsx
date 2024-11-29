import { Card } from './Card'

export default function Resources() {
  const resources = [
    {
      title: "Environmental Protection Agency",
      description: "Official US government environmental protection organization.",
      link: "https://www.epa.gov/"
    },
    {
      title: "United Nations Environment Programme",
      description: "Leading global environmental authority that sets the global environmental agenda.",
      link: "https://www.unep.org/"
    },
    {
      title: "National Geographic: Environment",
      description: "Explore the latest environmental news and learn about sustainability efforts.",
      link: "https://www.nationalgeographic.com/environment/"
    },
    {
      title: "Greenpeace",
      description: "Independent global campaigning organization that acts to change attitudes and behaviour.",
      link: "https://www.greenpeace.org/"
    },
    {
      title: "The Nature Conservancy",
      description: "Global environmental nonprofit working to create a world where people and nature can thrive.",
      link: "https://www.nature.org/"
    },
    {
      title: "World Wildlife Fund",
      description: "Leading organization in wildlife conservation and endangered species protection.",
      link: "https://www.worldwildlife.org/"
    }
  ]

  return (
    <section id="resources" className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Additional Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Card key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-green-600">{resource.title}</h3>
            <p className="mb-4">{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Learn More
            </a>
          </Card>
        ))}
      </div>
    </section>
  )
}

