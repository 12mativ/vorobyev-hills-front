import Block from "@/components/Block";

export default function Page() {
  return (
    <>
      <div>
        <Block/>
        <Block/>
        <Block/>
      </div>

      <div className='mt-5 text-red-500'>
        <Block/>
        <Block/>
        <Block/>
      </div>
    </>
  )
}

// interface type {
//   age: Array<string>
// }
//
// let a: type = {
//   age: ['123', '123', '123']
// }
//
// const obj = {
//   humans: [{name: 'Ivan'}, {name: 'Liza'}, {name: 'Dima'}],
// }
//
// export default function getAge(age: number) {
//   return age + 1
// }
//
// let myAge = getAge(12)
// console.log(myAge)
//
// for (let i; i < 5; i++) {
//   console.log(i)
// }
//
// let val = 0
//
// while (val < 5) {
//   console.log('It is true!')
//   val++
// }