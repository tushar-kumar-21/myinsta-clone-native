import { create } from 'zustand';

interface uniqueTypes {
    generateUniqueId: () => number;    
    generateSingleDigitUniqueNumber: () => number;    
}

const Store = create<uniqueTypes>((set) => ({
    generateUniqueId: () => {
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 1000);
        const newUniqueId = parseInt(`${timestamp}${random}`);
        return newUniqueId;
    },
    generateSingleDigitUniqueNumber: () => {
        const uniqueNumber = Math.floor(Math.random() * 100) + 1;
        return uniqueNumber % 10 + 1; // Ensure it's a single-digit number between 1 and 10
    }
}));

export default Store;
