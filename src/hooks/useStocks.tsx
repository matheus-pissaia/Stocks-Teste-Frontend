import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import { IStock } from '../types';
 
interface StocksProviderProps {
  children: ReactNode;
}

interface StocksContextData {
  stocks: IStock[];
  handleSubscribeStock: (stockSymbol: string) => void;
  handleUnsubscribeStock: (stockSymbol: string) => void;
}

const StocksContext = createContext<StocksContextData>({} as StocksContextData);

export function StocksProvider({ children }: StocksProviderProps) {
  const [stocks, setStocks] = useState<IStock[]>([]);
  
  const { lastJsonMessage, sendJsonMessage } = useWebSocket('ws://localhost:8080', {
    onOpen: () => console.log('ws opened'),
    onError: (event) => console.error(event)
  });

  useEffect(() => {
    if (lastJsonMessage != undefined) {
      console.log(lastJsonMessage)
      setStocks(lastJsonMessage.stocksData)
    }

  }, [lastJsonMessage])

  async function handleSubscribeStock(stockSymbol: string) {
    sendJsonMessage({
      event: 'subscribe',
      message: `${[stockSymbol]}`
    })
  }

  async function handleUnsubscribeStock(stockSymbol: string) {
    sendJsonMessage({
      event: 'unsubscribe',
      message: `${[stockSymbol]}`
    })
  }
  
  return (
    <StocksContext.Provider value={{ stocks, handleSubscribeStock, handleUnsubscribeStock}}>
      {children}
    </StocksContext.Provider>
  )
}

export function useStocks() {
  const context = useContext(StocksContext)

  return context;
}