const istate=[]
const reducer = (state=istate, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, { id: action.id, name: action.name, price: action.price, qty: action.qty, size: action.size,img:action.img }];
      case "REMOVE":
        let newArr = [...state]
        newArr.splice(action.index, 1)
        return newArr;
      case "UPDATE":
        let arr = [...state]
        arr.find((food, index) => {
          if (food.id === action.id) {
            console.log(food.qty, parseInt(action.qty), action.price + food.price)
            arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
            return arr
          }
        })
        return arr
      case "DROP":
        let empArray = []
        return empArray
      default:
        return istate
    }
}
export default reducer