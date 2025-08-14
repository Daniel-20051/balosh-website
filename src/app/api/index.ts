import axios from "axios";
const BaseUrl = "https://balosh-blog-api.onrender.com/api/v1";


export const getBlogs = async (page: number = 1, limit: number = 3) => {
    try {
        const response = await axios.get(`${BaseUrl}/blogs`, { params: { page, limit } });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const getBlogsBySlug = async (slug: string) => {
    try {
        const response = await axios.get(`${BaseUrl}/blogs/${slug}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getRecentBlogs = async (limit: number = 3) => {
    try {
        const response = await axios.get(`${BaseUrl}/blogs`, { params: { limit, page: 1 } });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getCategories = async () => {
    try {
        const response = await axios.get(`${BaseUrl}/categories`);
        return response.data;
    } catch (error) {
        console.log(error);
        // Return empty array if categories endpoint doesn't exist
        return { data: [] };
    }
}