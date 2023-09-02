const BASE_URL: string = `${process.env.NEXT_PUBLIC_API_URL}`;

export const httpService = async (resource: string, ...options: {}[]) => {
    return await fetch(BASE_URL + resource, ...options);
    // console.log(response);
    // return await response.json();
}
