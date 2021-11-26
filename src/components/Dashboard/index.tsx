import { useState } from 'react';

import { IStock } from '../StockModal';
import { TabNav } from '../TabNav';
import { StockItem } from '../StockItem';

import {
  Container,
  StockList,
  LabelLine,
  Content
} from './styles';

interface DashboardProps {
  handleOpenStockModal: (data: IStock) => void
}

const stocks = [
  {
    symbol: 'APPL',
    companyName: 'Apple Inc.',
    catchPhrase: 'Making the future',
    price: 148.81,
  },
  {
    symbol: 'NKE',
    companyName: 'Nike Inc.',
    catchPhrase: 'Just do it',
    price: 375.99,
  },
  {
    symbol: 'TSLA',
    companyName: 'Tesla',
    catchPhrase: 'Innovation for generations',
    price: 1141.17,
  },
  {
    symbol: 'AMZN',
    companyName: 'Amazon',
    catchPhrase: 'Moving the world',
    price: 851.76,
  }
]

export function Dashboard({ handleOpenStockModal }: DashboardProps) {
  const [] = useState();

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