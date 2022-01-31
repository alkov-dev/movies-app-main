class ImdbService {
  async getResourse(url) {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error('error service')
    }

    return await res.json()
  }

  getAllMovies(name) {
    return this.getResourse(`https://www.omdbapi.com/?apikey=5bec7959&s=${name}`)
  }
  getMovie(id) {
    return this.getResourse(`https://www.omdbapi.com/?apikey=5bec7959&i=${id}`)
  }
}


export default ImdbService;