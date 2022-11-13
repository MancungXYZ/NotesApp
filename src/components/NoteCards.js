import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@mui/material';
import { DeleteOutlined} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card: {
      marginTop: 30
    }
  })

export default function NoteCards({notes, handleDelete}) {
    const classes = useStyles()
  return (
    <div>
        <Card elevation={3} className={classes.card}>
            <CardHeader
            action={
                <IconButton onClick={() => handleDelete(notes.id)}>
                        <DeleteOutlined/>
                </IconButton>
            } 
            
            title={notes.title}
            subheader={notes.category}
            
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {notes.details}
                </Typography>
            </CardContent>
            
        </Card>
    </div>
  )
}
