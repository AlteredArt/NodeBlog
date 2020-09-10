const mongoose = require('mongoose')

const Post = require('./database/models/Post')



mongoose.connect('mongodb://localhosat/node-js-test-blog')

Post.create({
    title: "my first blog post",
    description: "mlog post description",
    content: 'add content here'
})