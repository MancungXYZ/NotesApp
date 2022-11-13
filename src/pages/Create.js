import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControlLabel } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [detail, setDetails] = useState('')
  const [category, setCategory] = useState('Todos')

  const [titleError, setTitleError] = useState(false)
  const [detailError, setDetailsError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setDetailsError(false)
    setTitleError(false)
    if (title == "") {
      setTitleError(true)
        }
    if (detail == "") {
      setDetailsError(true)
    }    
    if (title && detail) {
      fetch('http://localhost:8000/notes', {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({title, detail, category})
      }).then(() => history.push('/'))
    }
  }
  
  return (
    <Container>
      <Typography
      variant="h6"
      component="h2"
      gutterBottom
      >
        Create a new noted
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant='outlined'
          color="secondary"
          fullWidth
          required
          margin="normal"
          error={titleError}
          >
          </TextField>

          <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Note Details"
          variant='outlined'
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailError}
          >
          </TextField>
          <FormControl
          className={classes.field}
          >
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel control={<Radio />} label="Work" value="Work"></FormControlLabel>
            <FormControlLabel control={<Radio />} label="Todos" value="Todos"></FormControlLabel>
            <FormControlLabel control={<Radio />} label="Reminders" value="Reminders"></FormControlLabel>
          </RadioGroup>
          <Button 
          variant="contained"
          type="submit"
          color="secondary"
          endIcon={<SendIcon/>}
          >
            Submit
          </Button>
          </FormControl>

          

      </form>

    </Container>
  )
}
