const router = require('express').Router();

router.get('/route-1', (req, res) => {
    throw new Error("Fake error /api/route-1");
})

module.exports = router;