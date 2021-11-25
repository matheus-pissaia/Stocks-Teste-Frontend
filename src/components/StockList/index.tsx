import { StockItem } from '../StockItem';
import { IStock } from '../StockModal';

import { Container } from './styles';

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

interface StockListProps {
  handleOpenStockModal: (data: IStock) => void
}

export function StockList({handleOpenStockModal}: StockListProps) {
  return (
    <Container>
      {stocks.map(stock => {
        return <StockItem
          key={stock.symbol}
          stockItem={stock}
          handleOpenStockModal={handleOpenStockModal}
        />
      })}
    </Container>
  )
}