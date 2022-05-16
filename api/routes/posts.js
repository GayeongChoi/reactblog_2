const router = require('express').Router();
const Post = require('../models/Post');

//포스트 만들기
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//포스트 수정하기
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    //Post로 변경
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    {
                        new: true, //Post의 새로운 걸로 true
                    },
                );
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json('당신의 글만 수정할 수 있습니다.');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//포스트 삭제하기
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json('포스트가 삭제되었습니다.');
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json('당신이 작성한 포스트만 삭제 할 수 있습니다.');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});
//포스트 가져오기
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

//모든 포스트 가져오기
router.get('/', async (req, res) => {
    const userName = req.query.user;
    const catName = req.query.cat;

    try {
        let posts;

        if (userName) {
            posts = await Post.find({ userName });
        } else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName],
                },
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
