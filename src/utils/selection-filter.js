export default function selectionFilter({ shows } = []) {
  return {
    shows: [
      { title: 'Documentaries', data: shows?.filter((item) => item.genres[0] === 'documentaries') },
      { title: 'Comedies', data: shows?.filter((item) => item.genre === 'comedies') },
      { title: 'Children', data: shows?.filter((item) => item.genre === 'children') },
      { title: 'Crime', data: shows?.filter((item) => item.genre === 'crime') },
      { title: 'Feel Good', data: shows?.filter((item) => item.genre === 'feel-good') },
    ]
  };
}
