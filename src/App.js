import logo from './logo.svg';
import './App.css';
import CompleteFooter from './component/CompleteFooter';
import EmptyCart from './component/EmptyCart';
import MidPart from './component/MidPart';
import ItemCart from './component/ItemCart';

function App() {
  return (
       <>
        <EmptyCart></EmptyCart>
        <MidPart></MidPart>
        <ItemCart></ItemCart>
        <CompleteFooter></CompleteFooter>
       </>
  );
}

export default App;
