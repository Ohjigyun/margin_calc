import { createTheme } from '@mui/material/styles';

export const headTheme = createTheme({
  palette: {
    text: {
      primary: '#fff'
    }
  },
  typography: {
    fontFamily: 'noto-sans-kr-v12-latin-700, silka-regular-webfont',
  }
});

export const bodyTheme = createTheme({
  typography: {
    fontFamily: 'silka-regular-webfont, noto-sans-kr-v12-latin-700',
  }
});

export const tableContainerSx = {
  margin: '0px'
}

export const tableSx = {
  minWidth: 280
}

export const tableHeaderSx = {
  bgcolor: '#2F7DD2'
}

export const tdSx = {
  maxWidth: '4rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
}

export const inputSx = {
  maxWidth: '8rem',
  fontSize: '14px',
}

export const numberInputSx = {
  maxWidth: '3rem',
  fontSize: '12px',
}

export const numberSx = {
  fontSize: '12px',
}

export const qtyInputSx = {
  fontSize: '14px',
  maxWidth: '3rem'
}
