import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import { IStock } from '../types';
 
interface StocksProviderProps {
  children: ReactNode;
}

interface StocksContextData {
  allStocks: IStock[];
  handleSubscribeStock: (stockSymbol: string) => void;
  handleUnsubscribeStock: (stockSymbol: string) => void;
}

const StocksContext = createContext<StocksContextData>({} as StocksContextData);

export function StocksProvider({ children }: StocksProviderProps) {
  const [allStocks, setStocks] = useState<IStock[]>([]);
  
  const { lastJsonMessage } = useWebSocket('ws://localhost:8080', {
    onOpen: () => console.log('ws opened'),
    onError: (event) => console.error(event)
  });

  useEffect(() => {
    if (lastJsonMessage != null) {
      setStocks(lastJsonMessage.stocksData)
    }
    
  }, [lastJsonMessage])

  function handleSubscribeStock(stockSymbol: string) {
    // todo
  }

  function handleUnsubscribeStock(stockSymbol: string) {
    // todo
  }
  
  return (
    <StocksContext.Provider value={{ allStocks, handleSubscribeStock, handleUnsubscribeStock}}>
      {children}
    </StocksContext.Provider>
  )
}

export function useStocks() {
  const context = useContext(StocksContext)

  return context;
}