const axios = require('axios');
const config = require('../config');

exports.getAll = async function(req, res){
  let page = req.query.page;
  if (!page) {
    page = 1;
  }
  
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.moviedb_key}&language=en-US&page=${page}`;
  try {
    const response = await axios.get(url);
    res.status(200).json({ status: 'success', data: response.data });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error });
  }
}

exports.search = async function(req, res){
  let page = req.query.page;
  if (!page) {
    page = 1;
  }
  console.log('hello');
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${config.moviedb_key}&language=en-US&page=${page}`;
  try {
    const response = await axios.get(url);
    res.status(200).json({ status: 'success', data: response.data });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error });
  }
}

