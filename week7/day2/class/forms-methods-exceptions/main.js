let arr = [
  { id: 1, name: 'aaa', username: undefined,  },
  { id: 2, name: "bbb", username: "bbb222", c:function(){} },
  { id: 3, name: "ccc", username: "ccc333" },
];

console.log(arr);

arr.forEach(item=> {
    console.log(item.name);
})

let arrjson = JSON.stringify(arr);

console.log(arrjson);


let json = `[
    {"id":1,"name":"aaa"},
    {"id":2,"name":"bbb","username":"bbb222"},
    {"id":3,"name":"ccc","username":"ccc333"}
]`;

let arrFromJson = JSON.parse(json);

console.log(arrFromJson);