import { useState } from 'react';

import { Nav, TabButton } from './styles';

export function TabNav() {
  const [selectedTab, setSelectedTab] = useState('all stocks')

  return (
    <Nav>
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
    </Nav>
  )
}