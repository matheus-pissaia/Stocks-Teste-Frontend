import Modal from 'react-modal';

import { Container, StockInfo } from './styles';

import closeImg from '../../assets/close.svg';
import graphImg from '../../assets/graph.svg';

import { IStock } from '../../types';

interface StockModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  stock: IStock;
}

export function StockModal({isOpen, onRequestClose, stock}: StockModalProps) {
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
          
          <strong>{stock.price}</strong>
        </StockInfo>

        <div></div>

        <img src={graphImg} alt="graph" />
      </Container>
    </Modal>
  );
}