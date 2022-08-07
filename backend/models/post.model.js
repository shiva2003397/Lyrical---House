const mongoose = require('mongoose')
const Schema = mongoose.Schema

const post = Schema({
    title: Array,
    content: Array,
    likes: Array
})
const contentSchema = new Schema({
    username: String,
    post: Array
})

const poemPosts = mongoose.model('poem-posts', contentSchema)
// const shayariPosts = mongoose.model('shayari-posts', contentSchema)
// const shortStoriesPosts = mongoose.model('short-stories-posts', contentSchema)

module.exports = poemPosts 