import httpService from "./http.service";

const productEndpoint = "product/";

const productService = {
    addProductToCart: async (payload) => {
        const { data } = await httpService.post(`${productEndpoint}/cart`, payload);
        return data;
    },
    getCart: async () => {
        const { data } = await httpService.get(`${productEndpoint}/cart`);
        return data;
    },
    deleteProductFromCart: async (payload) => {
        const { data } = await httpService.delete(`${productEndpoint}/cart/${payload}`);
        return data;
    },
    getProducts: async () => {
        const { data } = await httpService.get(productEndpoint);
        return data;
    },
    removeProduct: async (productId) => {
        const { data } = await httpService.delete(productEndpoint + productId);
        return data;
    },
    update: async (payload) => {
        const { id, data } = payload;
        const { data: result } = await httpService.patch(productEndpoint + id, data);
        return result;
    },
    create: async (payload) => {
        const { data } = await httpService.post(productEndpoint, payload);
        return data;
    },
};
export default productService;
