const getJsonData = async (filePath) => {
  try {
    const response = await fetch(filePath)
    if (!response.ok) {
      throw new Error('Erro ao buscar o arquivo JSON')
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Erro: ', err);
  }
}

export default getJsonData;