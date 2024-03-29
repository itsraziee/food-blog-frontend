import * as React from 'react';

import { Box, TextField, Button, Card, styled, alpha } from '@mui/material';

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.COFFEEBEAN[0], 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.background.CIOCCOLATO[0], 0.8),
  },
}));

export default function CreatePostForm() {
  return (
    <Card>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { ml: 14.5, mt: 5, width: '100ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="title" label="Title" variant="standard" />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { ml: 14.5, mt: 7, width: '100ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="description" label="Description" multiline variant="standard" />
      </Box>
      <Box>
        <ColorButton sx={{ mt: 6, ml: 14.5, mb: 6 }} variant="contained" component="label">
          Upload File
          <input accept="image/*" id="uploadFile" multiple type="file" hidden />
        </ColorButton>
        <ColorButton sx={{ ml: 3 }} id="submit" type="submit" variant="contained" component="label">
          Submit
        </ColorButton>
      </Box>
    </Card>
  );
}
