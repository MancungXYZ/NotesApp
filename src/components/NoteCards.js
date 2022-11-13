import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@mui/material';
import { DeleteOutlined} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';

const useStyles = makeStyles({
    card: {
      marginTop: 30
    }
  })

export default function NoteCards({notes, handleDelete}) {
    const classes = useStyles()
  return (
    <Box>
        <Card elevation={3}>
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
                <Box>
                <Typography variant="body2" color="textSecondary">
                    {notes.details}
                </Typography>
                </Box>
            </CardContent>
            
        </Card>
    </Box>
  )
}
