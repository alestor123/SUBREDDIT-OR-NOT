module.exports = async name =>{
var data = await axios.get(`https://reddit.com/r/${name}`)
return data.data.includes('Sorry, there aren’t any communities on Reddit with that name')
}