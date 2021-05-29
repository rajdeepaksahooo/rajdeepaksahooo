

// document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);
    
//     function fetchUserData(){
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => response.json())
//             .then(users => {
//                 let output = '<h2>Lists of Users</h2>';
//                 output += '<ul>';
//                 users.forEach(function(user) {
//                     output += `
//                         <li>
//                             Id: ${user.id}:<br>
//                             User Id: ${user.userId}:<br>
//                             Title: ${user.title}:<br>
//                             Body: ${user.body}"<br>"
//                             "<button id='cmt'>"${'Comments'}"</button>"
//                         </li>
//                     `;
//                 });
//                 output += '</ul>'
//                 document.getElementById("response").innerHTML = output;
//         }   );
//     }




// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res=>{res.json()
// .then(user=>{
//     let out = "<ul>";
//     user.forEach(user=>{
//         out+=`<li>
//             id: ${user.id}<br>
            
//             User Id : ${user.userId}<br>
//             Title : ${user.title}<br>
//             Body : ${user.body}
//             </li>`
//     })
//     out+="</ul>"
//     console.log(out)
// })
// });

//Post Methord...

var form = document.getElementById('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    var Title = document.getElementById('title').value
    var Body = document.getElementById('body').value

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            title: Title,
            body: Body
        }),
        headers:{
            'Content-type':"application/json; charset=UTf-8"
        }
        
    })
    
    .then(response=>response.json())
    .then(data=>console.log(data))
})
// document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserCmt);
    
// function fetchUserCmt(id){
//     fetch('https://jsonplaceholder.typicode.com/posts/'+ id+'/comments')
//         .then(response => response.json())
//         .then(users => {
//             let output = '<h2>Lists of Users</h2>';
//             output += '<ul>';
//             users.forEach(function(user) {
//                 output += `
//                     <li>
//                         Id: ${user.id}:<br>
//                         User Id: ${user.name}:<br>
//                         Title: ${user.email}:<br>
//                         Body: ${user.body}"<br>"
//                         // "<button id='cmt'>"${'cmt'}"</button>"
//                     </li>
//                 `;
//             });
//             output += '</ul>'
//             document.getElementById("comments").innerHTML = output;
//     }   );
// }


console.log('hi')

var data;
var posts;
document.getElementById('fetchUserDataBtn').addEventListener('click',getdata)
function getdata() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())

        .then(posts => {
            console.log(posts)
            let output = '<h2>Lists of posts</h2>';
            output += '<ul>';
            posts.forEach(function (user) {
                // data[i]=user
                // i +=1
                output += `
<li> USERID:${user.userId}<br>
ID:${user.id}<br>
BODY:${user.body}<br>
TITLE:${user.title}<br>
<button onclick="getdatabyid(${user.id})">Comments</button>
<button onclick="updatedatabyid(${user.id})">Update</button>
<button onclick="deletedatabyid(${user.id})">Delete</button><br>
<button onclick="albumsdatabyid(${user.id})">Albums</button>
<button onclick="photosdatabyid(${user.id})">Photos</button>
<br>


</li>
`;
            });
            output += '</ul>'
            document.getElementById("response").innerHTML = output;
            
        });

}

todosdatabyid=(id)=>{
    fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/photos')
    .then(response => response.json())

    .then(todos=> {
        console.log(todos)
        let output = '<h2>Lists of Todos</h2>';
        output += '<ul>';
        todos.forEach(function (user) {
            if (user.userId == id) {
                output += `

                <li>
                USERID-${user.userId}<br>
                ID-${user.id}<br>
                TITLE-${user.title}<br>
                COMPLETED-${user.completed}<br>
                </li>
                `;
            }
        });
        output += '</ul>'
        document.getElementById("cmtplace").innerHTML = output;
    });
}



photosdatabyid=(id)=>{
    fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/photos')
    .then(response => response.json())

    .then(photos=> {
        console.log(photos)
        let output = '<h2>Lists of Photos</h2>';
        output += '<ul>';
        photos.forEach(function (user) {
            if (user.albumId == id) {
                output += `

                <li>
                USERID-${user.albumId}<br>
                ID-${user.id}<br>
                TITLE-${user.title}<br>
                URL-${user.url}<br>
                THUMBNAIL URL-${user.thumbnailUrl}<br>
                </li>
                `;
            }
        });
        output += '</ul>'
        document.getElementById("cmtplace").innerHTML = output;
    });
}


albumsdatabyid=(id)=>{
    fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/albums')
    .then(response => response.json())

    .then(album=> {
        console.log(album)
        let output = '<h2>Lists of Albums</h2>';
        output += '<ul>';
        album.forEach(function (user) {
            if (user.userId == id) {
                output += `

                <li>
                USERID:${user.userId}<br>
                ID-${user.id}<br>
                TITLE-${user.title}<br>
                </li>
                `;
            }
        });
        output += '</ul>'
        document.getElementById("cmtplace").innerHTML = output;
    });
}





function getdatabyid(id) {

    fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
        .then(response => response.json())

        .then(comments => {
            console.log(comments)
            let output = '<h2>Lists of comments</h2>';
            output += '<ul>';
            comments.forEach(function (user) {
                if (user.postId == id) {
                    output += `

                    <li>
                    USERID:${user.postId}<br>
                    ID-${user.id}<br>
                    NAME-${user.name}<br>
                    EMAIL-${user.email}<br>
                    BODY:${user.body}<br>
                    </li>
                    `;
                }
            });
            output += '</ul>'
            document.getElementById("cmtplace").innerHTML = output;
        });

}

// document.getElementById('s').addEventListener('click',updatedatabyid)
var updatedatabyid= (id) =>{
var Title =  document.getElementById('t').value
var Body = document.getElementById('b').value

    fetch('https://jsonplaceholder.typicode.com/posts/'+id+'', {
        method: 'Put',
        body: JSON.stringify({
            id: id,
            title: Title,
            body: Body,
            
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => {console.log(json);
        console.log("Data Updated..")});
}


var deletedatabyid = (id) => {
        fetch('https://jsonplaceholder.typicode.com/posts/'+id+'', {
    method: 'DELETE',
    id: id

    })
    .then((response) => response.json())
    .then((json) => {console.log(json)
    console.log('Deleted..')});
}




// function getdata(id) {
//     fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments') {
//     .then(response => response.json())
//     .then(json => console.log(json))

    
        
//     };
// }
// function deletedatabyid(id){
//     delete data[id-1]
//     console.log(data)
// }