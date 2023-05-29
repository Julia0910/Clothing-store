import httpService from "./http.service";

const productEndpoint = "product/";

const productService = {
    createProduct: async (payload) => {
        const { data } = await httpService.post(productEndpoint, payload);
        return data;
    },
    getProducts: async (pageId) => {
        const { data } = await httpService.get(productEndpoint, {
            params: {
                orderBy: "pageId",
                equalTo: `${pageId}`
            }
        });
        return data;
    },
    removeProduct: async (productId) => {
        const { data } = await httpService.delete(productEndpoint + productId);
        return data;
    }
};
export default productService;
