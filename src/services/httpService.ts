const BASE_URL: string = `${process.env.NEXT_PUBLIC_API_URL}`;

export const httpService = async (resource: string, ...options: {}[]) => {
    const response = await fetch(BASE_URL + resource, ...options);
    return await response.json();
}
