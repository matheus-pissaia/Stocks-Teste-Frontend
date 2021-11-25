import { IStock } from '../StockModal';
import { Container, Content } from './styles';

import up1 from '../../assets/up1.svg'

interface StockItemProps {
  stockItem: IStock
  handleOpenStockModal: (data: IStock) => void;
}

export function StockItem({ stockItem, handleOpenStockModal }: StockItemProps) {
  const setSelectedStock = () => {
    handleOpenStockModal(stockItem)
  }

  return (
    <Container>
      <Content onClick={setSelectedStock}>
        <div>
          <img src={up1} alt="up1" />
          <strong>{stockItem.symbol}</strong>
        </div>
        <p>{stockItem.price}</p>
      </Content>
    </Container>
  )
}