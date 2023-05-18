const Category = require("../modeles/Category");
// const Quality = require("../modeles/Quality");
const categoryMock = require("../mock/categories.json");
// const qualitiesMock = require("../mock/qualities.json");

module.exports = async () => {
    const categories = await Category.find();
    if (categories.length !== categoryMock.length) {
        await createInitialEntity(Category, categoryMock);
    }
    // const qualities = await Quality.find();
    // if (qualities.length !== qualitiesMock.length) {
    //     await createInitialEntity(Quality, qualitiesMock);
    // }
};

async function createInitialEntity(Model, data) {
    await Model.collection.drop();
    return Promise.all(
        data.map(async (item) => {
            try {
                delete item._id;
                const newItem = new Model(item);
                await newItem.save();
                return newItem;
            } catch (e) {
                return e;
            }
        })
    );
}
