/** 
 * Stand: 15.10.2025
 */

import { DeleteOutlined } from '@mui/icons-material';
import { Card, CardHeader, CardContent, IconButton, Typography } from '@mui/material';

//
export default function NodeCard({ note }) {

    //
    return (
        <div>
            <Card elevation={2}>
                <CardHeader
                    title={note.title}
                    subheader={note.category}
                    action={
                        <IconButton onClick={() => { }}>
                            {/* Aufruf des Ereignisbehandlers in "Notes.js" */}
                            <DeleteOutlined />
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography>
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
} 