const express = require("express");
const app = express();
const port = 5000;
const { Registries } = require("./data");

app.use(express.json());

app.get("/api/search", (req, res) => {
    const firstName = req.query.firstname.toLowerCase();
    const lastName = req.query.lastname.toLowerCase();
    const grid = req.query.grid;

    const responseData = Registries.filter(item => {
            return (firstName !== "" && item.firstName.toLowerCase().includes(firstName))
                || (lastName !== "" && item.lastName.toLowerCase().includes(lastName))
                || item.id === grid;
        })
        .map(item => {
            return {
                grid: item.id,
                firstName: item.firstName,
                lastName: item.lastName,
                eventType: item.registryType,
                itemCount: item.items.length
            };
            
        });

    res.send(responseData);
});

app.get("/api/getregistry", (req, res) => {
    const grid = req.query.grid;
    const registry = Registries.filter(item => item.id === grid);
    const responseData = registry.length ? registry[0] : null;
    res.send(responseData)
});

app.post("/api/updateWantsHas", (req, res) => {
    const {grid, productId, wants, has} = req.body;
    console.log(grid, productId, wants, has);
    res.send();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
