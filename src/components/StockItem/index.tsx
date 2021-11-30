import { IStock } from '../../types';

import { Container, Content } from './styles';
import { randomImg } from '../../utils/randomImg';

import up1 from '../../assets/up1.svg';
import up2 from '../../assets/up2.svg';
import down1 from '../../assets/down1.svg';
import down2 from '../../assets/down2.svg';

const images = [
  up1,
  up2,
  down1,
  down2
]

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
          <img src={randomImg(images)} alt="" />
          <strong>{stockItem.symbol}</strong>
        </div>
        <p>{stockItem.basePrice}</p>
      </Content>
    </Container>
  )
}