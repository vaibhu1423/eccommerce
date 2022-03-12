import { Box, Grid } from '@mui/material'
import React from 'react'

export default function Colors() {
  return (
    <div>
         <Grid container spacing={1}>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'background', color: 'dark', p: 5 , m:3 , border:1 }}>
          background
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            bgcolor: 'secondary.main',
            color: 'secondary.contrastText',
            p: 2,
          }}
        >
          secondary.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'error.main', color: 'error.contrastText', p: 2 }}>
          error.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'warning.main', color: 'warning.contrastText', p: 2 }}>
          warning.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'info.main', color: 'info.contrastText', p: 2 }}>
          info.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'success.main', color: 'success.contrastText', p: 2 }}>
          success.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'text.primary', color: 'background.paper', p: 2 }}>
          text.primary
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'text.secondary', color: 'background.paper', p: 2 }}>
          text.secondary
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'text.disabled', color: 'background.paper', p: 2 }}>
          text.disabled
        </Box>
      </Grid>
    </Grid>
    </div>
  )
}
