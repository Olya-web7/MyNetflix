export default function selectionFilter({ shows } = []) {
  return {
    shows: [
      { title: 'Drama', data: shows?.filter((item) => item.genres[0] === 'Drama') },
      { title: 'Science-Fiction', data: shows?.filter((item) => item.genres[0] === 'Science-Fiction') },
      { title: 'Adventure', data: shows?.filter((item) => item.genres[0] === 'Adventure') },
      { title: 'Crime', data: shows?.filter((item) => item.genres[0] === 'Crime') },
      { title: 'Romance', data: shows?.filter((item) => item.genres[0] === 'Romance') },
      { title: 'Horror', data: shows?.filter((item) => item.genres[0] === 'Horror') },
      { title: 'Action', data: shows?.filter((item) => item.genres[0] === 'Action') },
    ]
  }
}
