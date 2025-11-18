import PizzaSelector from '@/components/seccion/inicio/PizzaSelector'
import AboutSection from '@/components/seccion/inicio/AboutSection'
import HighlightsSection from '@/components/seccion/inicio/HighlightsSection'
import TeamCarousel from '@/components/seccion/inicio/TeamCarousel'


export default function Home() {
  return (
    <div className="min-h-screen">
      <PizzaSelector/>
      <AboutSection/>
      <HighlightsSection/>
      <TeamCarousel/>
    </div>
  );
}
