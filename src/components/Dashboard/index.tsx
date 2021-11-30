import { TabNav } from '../TabNav';
import { StockItem } from '../StockItem';

import {
  Container,
  StockList,
  LabelLine,
  Content
} from './styles';

import { IStock } from '../../types';
import { useStocks } from '../../hooks/useStocks';

interface DashboardProps {
  handleOpenStockModal: (data: IStock) => void
}

export function Dashboard({ handleOpenStockModal }: DashboardProps) {
  const { stocks } = useStocks();

  return (
    <Container>
      <Content>
        <TabNav />

        <LabelLine>
          <span>Symbol</span>
          <span>Price</span>
        </LabelLine>

        <StockList>
          {stocks.map(stock => {
            return <StockItem
              key={stock.symbol}
              stockItem={stock}
              handleOpenStockModal={handleOpenStockModal}
            />
          })}
        </StockList>
      </Content>
    </Container>
  );
}