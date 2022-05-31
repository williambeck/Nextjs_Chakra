/* eslint-disable react/jsx-no-undef */
import { Heading, Spinner } from '@chakra-ui/react'



export default function Home() {
  return (
    <Heading as='h1' size='4xl' noOfLines={1} textAlign='center'>
     Estrutura Next e Lib ( Chakra Ui )
     <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
  </Heading>
  )
}
