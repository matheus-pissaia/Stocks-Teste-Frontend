import { StockList } from '../StockList';

import { IStock } from '../StockModal';

import { Container } from './styles';

interface DashboardProps {
  handleOpenStockModal: (data: IStock) => void
}

export function Dashboard({handleOpenStockModal}: DashboardProps) {
  return (
    <Container>
      <StockList handleOpenStockModal={handleOpenStockModal}/>
    </Container>
  );
}