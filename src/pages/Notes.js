import React, { useEffect, useState } from 'react'
import { Container } from '@mui/system';
import NoteCards from '../components/NoteCards';
import { makeStyles } from '@mui/styles';
import Masonry from 'react-masonry-css';
import { Box } from '@mui/material';

const useStyles = makeStyles({
  card: {
    marginTop: 30
  }
})

export default function Notes() {
  const [notes, setNotes] = useState([])
  const classes = useStyles()

  useEffect(() => {
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })

  const newNotes = notes.filter(notes => notes.id != id)
    setNotes(newNotes)
  }

  return (
    <Container >
      <Masonry 
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
        {notes.map(notes =>(
          <Box key={notes.id}>
            <NoteCards notes={notes} handleDelete={handleDelete} />
          </Box>
      ))}
      </Masonry>
    </Container>
  )
}
