import { StockItem } from '../StockItem';

import { Container } from './styles';

const stocks = [
  {
    symbol: 'APPL',
    price: 148.81,
    graph: 'up'
  },
  {
    symbol: 'NKE',
    price: 375.99,
    graph: 'down'
  },
  {
    symbol: 'TSLA',
    price: 1141.17,
    graph: 'down'
  },
  {
    symbol: 'AMZN',
    price: 851.76,
    graph: 'up'
  }
]

export function Dashboard() {
  return (
    <Container>
      <ul>
        {stocks.map(stock => {
          return <StockItem key={stock.symbol} stockItem={stock} />
        })}
      </ul>
    </Container>
  )
}