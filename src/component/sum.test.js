import { Sum } from "./sum"

test('sum funtion should calculate sum of two numbaer',()=>{
   const result=Sum(1,2)
   

   //Assertion
   expect(result).toBe(3)
})