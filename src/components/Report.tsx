import { Card } from './Card'

export default function Report() {
  return (
    <section id="report" className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Report Pollution Violations</h2>
      <Card className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          If you witness any violation of pollution laws, please report it to our dedicated email address:
        </p>
        <a href="mailto:ecoguard.report@gmail.com" className="text-blue-500 hover:underline">
          ecoguard.report@gmail.com
        </a>
        <p className="mt-4">
          Your report can make a significant difference in protecting our environment. Please include the following information in your report:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Date and time of the incident</li>
          <li>Location (be as specific as possible)</li>
          <li>Description of the violation</li>
          <li>Photos or videos, if available (but do not put yourself in danger to obtain them)</li>
          <li>Your contact information (optional, for follow-up purposes)</li>
        </ul>
        <p className="mt-4">
          We take all reports seriously and will investigate them thoroughly. Thank you for your commitment to environmental protection!
        </p>
      </Card>
    </section>
  )
}

