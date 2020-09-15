import postsListReducer from './../reducers/posts-list-reducer';

describe('postsListReducer', () => {
  let action;
  const testDate = new Date();
  const testState = {
    1: {
      title: 'Pastafarianism is the most rational religion',
      body: 'example body text',
      date: testDate,
      score: 0,
      id: 1,
      threadId: 1, 
      topicId: 1
    },
    2: {
      title: 'Pastafarianism makes no sense',
      body: 'example body text',
      date: testDate,
      score: 0,
      id: 2,
      threadId: 1,
      topicId: 1
    }
  }

  test("Should return default state if no action type is recognized", () => {
    action = {type: null};
    expect(postsListReducer({}, action)).toEqual({});
    expect(postsListReducer(testState, action)).toEqual(testState);
  });

  test('should add a post successfully', ()=>{
    action = {
      type: "ADD_POST",
      title: 'Whatever, man',
      body: 'I cant even with this whole forum',
      score: -50,
      date: testDate,
      id: 3,
      threadId: 1,
      topicId: 1
    }

    expect(postsListReducer({}, action)).toEqual({
      3: {
        title: 'Whatever, man',
        body: 'I cant even with this whole forum',
        score: -50,
        date: testDate,
        id: 3,
        threadId: 1,
        topicId: 1
      }
    });
  });

  test('Should successfully delete a post', ()=>{
    action = {
      type: 'DELETE_POST',
      id: 1
    };
    expect(postsListReducer(testState, action)).toEqual({
      2: {
        title: 'Pastafarianism makes no sense',
        body: 'example body text',
        date: testDate,
        score: 0,
        id: 2,
        threadId: 1,
        topicId: 1
      }
    });
  })
});