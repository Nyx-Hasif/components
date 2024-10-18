
import Main from "@/Components/Main";
import Navbar from "@/Components/Navbar";
import ContextProvider from "@/context/AppContext";


export default function Home() {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <main className="mt-[60px]">
          <Main />
        </main>

        {/* <Card /> */}
      </ContextProvider>
    </>
  );
}
