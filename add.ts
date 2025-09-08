export const add = (nums: string): number =>{
    if(nums=="")return 0;
    let delimiter: RegExp=/,|\n/;
    const escapeRegExp = (s: string): string =>
        s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if(nums.startsWith("//")){
        const match=nums.match(/^\/\/(.+)\n/);
        if(!match){
            throw Error("Invalid delimiter given");
        }
        const matchedDelimiter=escapeRegExp(match[1]);
        delimiter=new RegExp(matchedDelimiter);
        nums=nums.slice(match[0].length);
    }
    let arr: number[]=nums.trim().split(delimiter).filter(n=>n.length>0).map(Number);
    let negativeNumbers: number[]=arr.filter(n=>n<0);
    if(negativeNumbers.length>0){
        throw Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
    }
    const sum: number=arr.reduce((acc,n)=>acc+=n,0)
    return sum
}
