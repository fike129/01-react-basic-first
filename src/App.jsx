import Header from "./components/Header"
import TeachingSection from "./components/TeachingSection"
import DifferencesSection from "./components/DifferencesSection"
import IntroSection from "./components/IntroSection"
import TabsSection from "./components/TabsSection"
import FeedbackSection from "./components/FeedbackSection"
import { useState } from "react"


export default function App() {
  const [tab, setTab] = useState('feedback')
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection />

        {tab == 'main' && (
          <>
          <TeachingSection/>
          <DifferencesSection/>
          </>
        )}

        {tab == 'feedback' && <FeedbackSection />}


      </main>
    </>
  )
}


