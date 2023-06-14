import axiopost from "./axiopost"



const getAllpost = (inputId) => {
    return axiopost.get(`/api/get-all-post?id=${inputId}`)
}

const createNewpostAdm = (data) => {
    return axiopost.post('/api/create-new-post', data);
}


// const deletepostAdm = (postId) => {
//     return axiopost.delete('/api/delete-postAdm', {
//         // headers: {Authorization: authorizationToken},
//         data: { id: postId }


//     });
// }

// const editpostAdm = (data) => {
//     return axiopost.put('/api/edit-postAdm', data);
// }







export {
    getAllpost,
    createNewpostAdm
    // deletepostAdm,
    // editpostAdm
}