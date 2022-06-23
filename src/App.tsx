import { Menu } from './pages/Menu';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Alert } from './components/layouts/Alert';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';


function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Header />
        <Menu />
        <Cart/>
        <Footer/>
        <Alert text='Hacenos tu pedido aqui' />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
