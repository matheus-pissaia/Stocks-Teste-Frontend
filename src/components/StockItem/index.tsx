import { Container, Content } from './styles';

import up1 from '../../assets/up1.svg'

interface StockItemProps {
  stockItem: {
    symbol: string;
    price: number;
    graph: string;
  }
}

export function StockItem({stockItem}: StockItemProps) {
  return (
    <Container>
      <Content>
        <div>
          <img src={up1} alt="up1" />
          <strong>{stockItem.symbol}</strong>
        </div>
        <p>{stockItem.price}</p>
      </Content>
    </Container>
  )
}