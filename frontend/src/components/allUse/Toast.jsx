import { toast } from "react-hot-toast";

const tCustom = (icon, text) => {
    toast.success(text, {
        icon: icon, //  használd a Windows + . (pont) gombot és az emojit tedd idézőjelek vagy aposztrófok közé pl: Notify.tCustom('👍', "Szia!");
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        },
    });
}

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

const Notify = { tCustom, tSuccess, tError };

export default Notify;
