import InputText from '../InputText'
import './Form.css'

const Form = () => {
  return (
    <section className='form'>
      <form action=''>
        <InputText label='Nome' placeholder='Digite seu nome' />
        <InputText label='Cargo' placeholder='Digite seu cargo' />
        <InputText label='Imagem' placeholder='Informe o endereço URL da imagem' />
        <InputText label='Telefone' placeholder='Digite seu telefone' />
      </form>
    </section>
  )
}

export default Form