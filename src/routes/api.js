import express from express;

const router = express.Router();

router.get("/book", (req, res) => {
    res.send(path.join( type, 'GET') );
});

router.post("/book", (req, res) => {
    res.send({ type: 'POST' });
});

router.put("/book/:id", (req, res) => {
    res.send({ type: 'PUT'});
});

router.delete("/book/:id", (req, res) => {
    res.send({ type: 'DELETE'})
});

export default router;