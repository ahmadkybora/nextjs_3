import { toast } from "react-toastify";

export const success = async (res: Response) => {
    const { message } = await res.json();
    switch (res.status) {
        case 200:
            toast.success(message);
            break;

        case 201:
            toast.success(message);
            break;

        default:
        // do nothing
    }
};
