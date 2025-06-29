import { AcademicSection } from './AcademicSection/AcademicSection';
import { ExperienceSession } from './ExperienceSession/ExperienceSession';
import { Header } from './Header/Header';
import { ObjectiveSection } from './ObjectiveSection/ObjectiveSection';
import { GlobalStyles }  from './styles/GlobalStyles';

function App() {
  return (
    <>
     <Header/>
     <AcademicSection/>
     <ExperienceSession />
     <ObjectiveSection  />
     <GlobalStyles/>
    </>
  );
}

export default App;
