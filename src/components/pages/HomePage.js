import React from 'react'
import Title from '../ui/Title'
import CardList from '../ui/CardList'
import SearchForm from '../ui/SearchForm'

const HomePage = () => {
  // Setting up state
  return (
    <div className="section">
      <Title title="Cool Beach Wines" />
      <SearchForm />
      <CardList />
    </div>
  )
}

export default HomePage
