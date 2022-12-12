import React, { useState, useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Paper, Input } from '@mui/material'
import { tableContainerSx, tableHeaderSx, tableSx, inputSx, numberInputSx, qtyInputSx, numberSx, headTheme, bodyTheme, textAlignSx, smallTableContainerSx } from '../styles/tableStyles'
import Head from 'next/head'

export default function Home() {
  const [item, setItem] = useState<string>('제품명 A')
  const [itemSalePrice, setItemSalePrice] = useState<number>(100000)
  const [itemCostPrice, setItemCostPrice] = useState<number>(50000)
  const [itemMargin, setItemMargin] = useState<number>(50000)
  const [competitors, setCompetitors] = useState<string>('제품명 B')
  const [competitorsSalePrice, setCompetitorsSalePrice] = useState<number>(25000)
  const [competitorsCostPrice, setCompetitorsCostPrice] = useState<number>(10000)
  const [competitorsMargin, setCompetitorsMargin] = useState<number>(15000)
  const [qty, setQty] = useState<number>(1)
  const [marginDifference, setMarginDifference] = useState<number>(35000)
  const [totalMarginDifference, setTotalMarginDifference] = useState<number>(35000)

  const itemChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value)
  }

  const itemCostPriceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemCostPrice(parseInt(e.target.value))
  }
  
  const itemSalePriceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemSalePrice(parseInt(e.target.value))
  }

  const competitorsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompetitors(e.target.value)
  }

  const competitorsCostPriceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompetitorsCostPrice(parseInt(e.target.value))
  }
  
  const competitorsSalePriceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompetitorsSalePrice(parseInt(e.target.value))
  }

  const qtyChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQty(parseInt(e.target.value))
  }

  useEffect(() => {
    const margin = itemSalePrice - itemCostPrice
    setItemMargin(margin ? margin : 0)
  }, [itemCostPrice, itemSalePrice])

  useEffect(() => {
    const margin = competitorsSalePrice - competitorsCostPrice
    setCompetitorsMargin(margin ? margin : 0)
  }, [competitorsCostPrice, competitorsSalePrice])

  useEffect(() => {
    const difference = Math.abs(competitorsMargin - itemMargin)
    setMarginDifference(difference ? difference : 0)
  }, [itemMargin, competitorsMargin])

  useEffect(() => {
    const totalDifference = marginDifference * qty
    setTotalMarginDifference(totalDifference ? totalDifference : 0)
  }, [marginDifference, qty])

  return (
    <div>
      <Head>
        <title>Margin calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TableContainer sx={tableContainerSx} component={Paper}>
        <Table sx={tableSx} aria-label="spanning table">
          <ThemeProvider theme={headTheme}>
            <TableHead sx={tableHeaderSx}>
              <TableRow>
                <TableCell sx={textAlignSx}>Details</TableCell>
                <TableCell sx={textAlignSx} colSpan={3}>Price</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={textAlignSx}>제품명</TableCell>
                <TableCell sx={textAlignSx}>판매가</TableCell>
                <TableCell sx={textAlignSx}>원가</TableCell>
                <TableCell sx={textAlignSx}>마진</TableCell>
              </TableRow>
            </TableHead>
          </ThemeProvider>
          <ThemeProvider theme={bodyTheme}>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Input sx={inputSx} type="text" value={item} onChange={itemChangeHandler}></Input>
                </TableCell>
                <TableCell>
                  <Input sx={numberInputSx} type="number" value={itemSalePrice} onChange={itemSalePriceChangeHandler}></Input>
                </TableCell>
                <TableCell>
                  <Input sx={numberInputSx} type="number" value={itemCostPrice} onChange={itemCostPriceChangeHandler}></Input>
                </TableCell>
                <TableCell sx={numberSx}>{itemMargin}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Input sx={inputSx} type="text" value={competitors} onChange={competitorsChangeHandler}></Input>
                </TableCell>
                <TableCell>
                  <Input sx={numberInputSx} type="number" value={competitorsSalePrice} onChange={competitorsSalePriceChangeHandler}></Input>
                </TableCell>
                <TableCell>
                  <Input sx={numberInputSx} type="number" value={competitorsCostPrice} onChange={competitorsCostPriceChangeHandler}></Input>
                </TableCell>
                <TableCell sx={numberSx}>{competitorsMargin}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={3}/>
                <TableCell colSpan={2}>일 환자 수</TableCell>
                <TableCell colSpan={2}>
                  <Input sx={qtyInputSx} type="number" value={qty} onChange={qtyChangeHandler}></Input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>환자 1인당 <br/> 마진 차이</TableCell>
                <TableCell colSpan={2}>{marginDifference}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>총 마진 차이</TableCell>
                <TableCell colSpan={2}>{totalMarginDifference}</TableCell>
              </TableRow>
            </TableBody>
          </ThemeProvider>
        </Table>
      </TableContainer>
      <TableContainer sx={smallTableContainerSx} component={Paper}>
        <Table sx={tableSx} aria-label="spanning table">
          <ThemeProvider theme={headTheme}>
            <TableHead sx={tableHeaderSx}>
              <TableRow>
                <TableCell sx={textAlignSx} colSpan={2}>월간</TableCell>
                <TableCell sx={textAlignSx} colSpan={2}>연간</TableCell>
              </TableRow>
            </TableHead>
          </ThemeProvider>
          <ThemeProvider theme={bodyTheme}>
            <TableBody>
              <TableRow>
                <TableCell sx={textAlignSx}>월간<br/>환자 수</TableCell>
                <TableCell sx={textAlignSx}>{qty ? qty * 22 : 0}</TableCell>
                <TableCell sx={textAlignSx}>연간<br/>환자 수</TableCell>
                <TableCell sx={textAlignSx}>{qty ? qty * 22 * 12 : 0}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={textAlignSx}>월간 <br/>총 마진 차이</TableCell>
                <TableCell sx={textAlignSx}>{Math.round(totalMarginDifference * 22 / 10000)}<br/>만원</TableCell>
                <TableCell sx={textAlignSx}>연간 <br/>총 마진 차이</TableCell>
                <TableCell sx={textAlignSx}>{Math.round(totalMarginDifference * 22 * 12 / 10000)}<br/>만원</TableCell>
              </TableRow>
            </TableBody>
          </ThemeProvider>
        </Table>
      </TableContainer>
    </div>
  )
}
