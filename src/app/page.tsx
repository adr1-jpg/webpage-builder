"use client"

import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import SidePane from "./components/SidePane"
import MainContent from "./components/MainContent"
import NotePad from "./components/NotePad"
import { useState } from "react"

export default function Home() {
  const [components, setComponents] = useState<string[]>([])

  const addComponent = (componentType: string) => {
    setComponents([...components, componentType])
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen">
        <SidePane />
        <MainContent components={components}/>
        <NotePad />
      </div>
    </DndProvider>
  )
}

