import Header from "./components/Header";
import NotificationButton from "./components/NotificationButton";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="class-vendas">
          <div className="container-delimitador-largura">
            <SalesCard />
          </div>
        </section>
      </main>

    </>
  )


}

export default App;
