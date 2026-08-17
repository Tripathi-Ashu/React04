

// const props = {
//     foods:['Apple' ,'Orange' ,'Banana'];
// }




function Food ({foods}) {
     
    console.log(foods)
    return (
        <>
         <ul>

            {foods.map(food => <li>{food}</li>)};
            
         </ul>
        </>
    )
};

export default Food;