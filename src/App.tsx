import { useState } from 'react';
import Modal from 'react-modal';

import { StocksProvider } from './hooks/useStocks';
import { StockModal } from './components/StockModal';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import { GlobalStyle } from './styles/global';

import { IStock } from './types';

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
    <StocksProvider>
      <Header />
      <Dashboard handleOpenStockModal={handleOpenStockModal}/>

      <StockModal
        isOpen={isStockModalOpen}
        onRequestClose={handleCloseStockModal}
        stock={selectedStock}
      />
      <GlobalStyle />
    </StocksProvider>
  );
}

export default App;
