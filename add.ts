export const add = (nums: string): number =>{
    if(nums=="")return 0;
    const delimiter: RegExp=/,|\n/
    const arr=nums.split(delimiter).map(Number)
    const sum: number=arr.reduce((acc,n)=>acc+=n,0)
    return sum
}
