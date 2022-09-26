import { useEffect, useState, Suspense, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import {Fragment} from 'react'
import { createResource as fetchData } from './helper'
import Spinner from './components/Spinner'
import { DataContext } from './context/DataContext.js'
import {SearchContext} from './context/SearchContext'

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])
    let searchInput = useRef('')

function App() {
    let [searchTerm, setSearchTerm] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([null])

    useEffect(() => {
      if (searchTerm) {
          setData(fetchData(searchTerm))
      }
    }, [searchTerm])
    
    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearchTerm(term)
    }

    const renderGallery = () => {
      if(data) {
          return (
              <Suspense fallback={<Spinner />}>
                  <Gallery data={data} />
              </Suspense>
          )
      }
  }
  
  

     return (
      <div className="App">
          <SearchBar handleSearch={handleSearch} />
          {message}
          {renderGallery()}
      </div>
  )  
    
}

export default App;

