export default function analyzeArray(arr){
    if(arr.length === 0 || !Array.isArray(arr)) return null;
    return {
        average: arr.reduce((prev, curr) => prev + curr, 0) / arr.length,
        min: arr.reduce((prev, curr) => prev < curr ? prev : curr),
        max: arr.reduce((prev, curr) => prev > curr ? prev : curr),
        length: arr.length
    }
};