import Modal from 'react-modal';

import { useStocks } from '../../hooks/useStocks';
import { formatPrice } from '../../utils/format';

import { IStock } from '../../types';

import { Container, StockInfo, SubscribeButton } from './styles';

import closeImg from '../../assets/close.svg';
import graphImg from '../../assets/graph.svg';

interface StockModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  stock: IStock;
}

export function StockModal({ isOpen, onRequestClose, stock }: StockModalProps) {
  const { handleSubscribeStock } = useStocks();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName='react-modal-overlay'
      className='react-modal-container'
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close-button"
      >
        <img src={closeImg} alt="close" />
      </button>

      <Container>
        <StockInfo>
          <div>
            <p><strong>{stock.symbol}</strong> &nbsp; {stock.companyName}</p>
            <span>"{stock.catchPhrase}"</span>
          </div>
          
          <strong>{formatPrice(stock.basePrice)}</strong>
        </StockInfo>

        <div></div>

        <img src={graphImg} alt="graph" />

        <SubscribeButton
          onClick={() => handleSubscribeStock(stock.symbol)}
        >
          <strong>Subscribe</strong>
        </SubscribeButton>
      </Container>
    </Modal>
  );
}