import { Footer, MessageBox, Navbar } from "./Components";

function App() {
  return (
    <div className="w-screen text-white relative" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/modern-office-with-large-window-table-with-chairs-plant-it_1340-37361.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      {/* Background overlay */}
      <div className="absolute h-full w-screen bg-[hsla(240,59%,7%,.80)] "></div>
      {/* Navbar component */}
      <Navbar />
      {/* MessageBox component */}
      <MessageBox />
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
