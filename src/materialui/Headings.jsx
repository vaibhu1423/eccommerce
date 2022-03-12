import { Box,Typography } from '@mui/material'
import React from 'react'


export default function Headings() {
  return (
    <div>
        {/* <h1>H1 👋</h1> */}
        <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h1" component="div" sx={{ fontWeight: 'bold' }} >
        H1 👋
      </Typography>
      <Typography variant="h2" gutterBottom component="div">
        H2 headline
      </Typography>
      <Typography variant="h3" gutterBottom component="div">
        H3 headline
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        h4. headline
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        h5 headline
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
        h6 headline
      </Typography>
      <Typography sx={{ typography: 'body1' }} gutterBottom>
        Body1.
      </Typography>
      <Typography sx={{typography: 'subtitle2' }} gutterBottom component="div">
        subtitle1.
      </Typography>
      <Typography sx={{typography:'button'}} display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography sx={{ typography: 'body2' }} display="block" gutterBottom>
        Body 2
      </Typography>
    </Box>
    </div>
  )
}
