import Banner from './components/Banner'
import InputText from './components/InputText'

function App() {

  return (
    <>
      <Banner />
      <InputText label="Nome" placeholder="Digite seu nome" />
      <InputText label="Cargo" placeholder="Digite seu cargo" />
      <InputText label="Imagem" placeholder="Informe o endereço URL da imagem" />
      <InputText label="Telefone" placeholder="Digite seu telefone" />
    </>
  )
}

export default App
