import { toast } from "react-hot-toast";

const tSuccess = (text) => {
    toast.success(text, {
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        },
    });
}

const tError = (text) => {
    toast.error(text, {
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        },
    });
}

const Notify = { tSuccess, tError };

export default Notify;
