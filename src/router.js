// import dependencies and libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import components and layouts
import Header from './components/header';
import AllInvoices from './components/allinvoices';
import AddInvoice from './components/addinvoice'; 
import UpdateInvoice from './components/updateinvoice';
import MainLayout from './layouts/mainlayout';

// build Router component with a Header and Routes
const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <MainLayout>
        <Routes>
            <Route path='allinvoices' element={<AllInvoices/>}/>
            <Route path='addinvoice' element={<AddInvoice/>}/>
            <Route path='updateinvoice' element={<UpdateInvoice/>}/>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

// export component Router
export default Router;