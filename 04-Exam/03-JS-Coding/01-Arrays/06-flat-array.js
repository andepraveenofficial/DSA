// Flat Array

function flat(data){
        let output = []
        for (let item of data){
            if (typeof item !== "object"){
                output.push(item);
            }
            else{
                output.push(...flat(item))
            }
        }

        return output
}

const arr = [ [1, 2, [3, 4]], [5, [6, [7, 8]]] ];

console.log(flat(arr));  // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

/*

flat([[1, 2, [3, 4]], [5, [6, [7, 8]]]])
  ├── flat([1, 2, [3, 4]])
  │    ├── 1
  │    ├── 2
  │    └── flat([3, 4])
  │         ├── 3
  │         └── 4
  └── flat([5, [6, [7, 8]]])
       ├── 5
       └── flat([6, [7, 8]])
            ├── 6
            └── flat([7, 8])
                 ├── 7
                 └── 8
*/

