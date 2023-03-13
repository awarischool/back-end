const router = require('express').Router();

router.get('/route-2', (req, res) => {
    return res.send("/api/route-2 router");
})

module.exports = router;