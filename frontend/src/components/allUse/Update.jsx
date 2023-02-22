import { useState } from "react";



const update = () => {
    const [refresh, setRefresh] = useState(false);

    setRefresh(prev => !prev);
}



const Update = { update };

export default Update;