import "./App.css";
import ListNews from "./components/ListNews";
import ProgramGuide from "./components/ProgramGuide";
import SeachBar from "./components/SeachBar";

function App() {
  const arrNews = [
    {
      icons: "https://img.icons8.com/material/2x/chevron--v1.png",
      text: "Ситуация в мире",
      link: "#",
    },
    {
      icons: "https://img.icons8.com/material/2x/circled-chevron-down--v1.png",
      text: "Погода в городе",
      link: "#",
    },
    {
      icons: "https://img.icons8.com/material/2x/left3--v2.png",
      text: "Новости програмирования",
      link: "#",
    },
  ];
  const arrPrograms = [
    {
      title: "Посещаемое",
      date: ["Машины - новинки машины", "Маркет - техника для дома"],
    },
    {
      title: "Программа передач",
      date: ["02:30 - Новости", "2:55 - Один дома"],
    },
  ];
  return (
    <div className="App">
      <ListNews arrNews={arrNews} />
      <SeachBar />
      <ProgramGuide arrPrograms={arrPrograms} />
    </div>
  );
}

export default App;
