import Logo from "./components/imgs/logoRickAndMorty.png";
import GlobalStyle from "./components/styles/global";
import Card from "./components/Cards";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { useState } from "react";

function App() {
  const [changePage, setChangePage] = useState(1);
  const [buttonMore, setButton] = useState(false);

  function increase() {
    setChangePage(changePage + 1);
  }

  function decrease() {
    changePage >= 2 && setChangePage(changePage - 1);
  }

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <img src={Logo} alt="" />
      </header>
      <div className="ContainerButtons">
        <button>
          <BiChevronsLeft onClick={decrease}></BiChevronsLeft>
        </button>
        <button onClick={increase}>
          <BiChevronsRight></BiChevronsRight>
        </button>
        <p>{changePage}</p>
        <button className="btnMore" onClick={() => setButton(!buttonMore)}>
          More
        </button>
      </div>
      <main>
        <div className="ContainerCard">
          <Card changePage={changePage} buttonMore={buttonMore}></Card>
        </div>
      </main>
    </div>
  );
}

export default App;
