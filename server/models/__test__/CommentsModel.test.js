require('../../db')
const CommentsModel = require('../CommentsModel')
// jest.setTimeout(20000)

test('Un nuevo comentario se puede crear con los valores requeridos', async () => {
    const sampleResponse = {
            itemId: "123123",
            userId: "620ee6a8a13fdcc2f1de4e00",
            content: "Hola, estoy dejando un comentario",
            _id: "6232a46628465cc2fe96b8d0",
            createdAt: "2022-03-17T03:00:54.557Z",
            __v: 0,
            $__: "123",
            $isNew: "1234",
            _doc: "123",
            $errors: "1212"
    }
    
    const newCommentBody = {
        content: "Hola, estoy dejando un comentario",
        userId: "620ee6a8a13fdcc2f1de4e00",
        itemId: "123123"
    }
    const newComment = await CommentsModel.create(newCommentBody)

    expect(Object.keys(newComment._doc)).toEqual(Object.keys(sampleResponse))
    
    // expect(newComment).toMatchObject({
    //     message: expect.any(String),
    //     newComment: expect.any(Object),
    //     itemId: expect.any(String),
    //     userId: expect.any(String),
    //     content: expect.any(String),
	// 	_id: expect.any(String),
	// 	createdAt: expect.any(String),
	// 	__v: expect.any(Number)
    // })

})