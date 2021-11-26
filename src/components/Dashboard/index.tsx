import { useState } from 'react';
import { IStock } from '../StockModal';
import { StockItem } from '../StockItem';

import {
  Container,
  TabNav,
  TabButton,
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
  const [selectedTab, setSelectedTab] = useState('all stocks');

  return (
    <Container>
      <Content>
        <TabNav>
          <TabButton
            type="button"
            onClick={() => { setSelectedTab('all stocks') }}
            isActive={selectedTab === 'all stocks'}
          >
            <span>All Stocks</span>
          </TabButton>
          <TabButton
            type="button"
            onClick={() => { setSelectedTab('subscribed') }}
            isActive={selectedTab === 'subscribed'}
          >
            <span>Subscribed Stocks</span>
          </TabButton>
        </TabNav>

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