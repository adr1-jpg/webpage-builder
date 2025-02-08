interface ItemRendererProps {
  type: string
}

export default function ItemRenderer({ type }: ItemRendererProps) {
  switch (type) {
    // Templates
    case "Blog":
      return <div className="p-4 border rounded">Blog Template Placeholder</div>
    case "Landing Page":
      return <div className="p-4 border rounded">Landing Page Template Placeholder</div>
    case "Portfolio":
      return <div className="p-4 border rounded">Portfolio Template Placeholder</div>

    // Layout
    case "Header":
      return <header className="bg-gray-200 p-4 mb-4">Header Placeholder</header>
    case "Footer":
      return <footer className="bg-gray-200 p-4 mt-4">Footer Placeholder</footer>
    case "Sidebar":
      return <aside className="bg-gray-100 p-4 w-64">Sidebar Placeholder</aside>

    // Components
    case "Heading":
      return <h2 className="text-2xl font-bold">Sample Heading</h2>
    case "Paragraph":
      return <p className="text-gray-700">This is a sample paragraph. Replace with your own content.</p>
    case "Image":
      return <img src="https://via.placeholder.com/300x200" alt="Placeholder" className="w-full max-w-md mx-auto" />
    case "Button":
      return <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click me</button>
    default:
      return null
  }
}

