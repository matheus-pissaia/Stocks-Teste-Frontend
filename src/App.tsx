import { useState } from 'react';
import Modal from 'react-modal';

import { StockModal } from './components/StockModal';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import { IStock } from './components/StockModal'

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  const [isStockModalOpen, setIsStockModalOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState<IStock>({} as IStock);

  function handleOpenStockModal(stock: IStock) {
    setIsStockModalOpen(true);
    setSelectedStock(stock)
  }

  function handleCloseStockModal() {
    setIsStockModalOpen(false);
  }

  return (
    <>
      <Header />
      <Dashboard handleOpenStockModal={handleOpenStockModal}/>

      <StockModal
        isOpen={isStockModalOpen}
        onRequestClose={handleCloseStockModal}
        stock={selectedStock}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
