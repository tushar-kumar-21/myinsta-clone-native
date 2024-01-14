import { create } from 'zustand';

interface uniqueTypes {
    generateUniqueId: () => number;
}

const Store = create<uniqueTypes>((set) => ({
    generateUniqueId: () => {
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 1000);
        const newUniqueId = parseInt(`${timestamp}${random}`);
        return newUniqueId;
    },
}));

export default Store;
