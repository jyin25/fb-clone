import dog from './pictures/dog.jpg';
import cat from './pictures/cat.jpg';

const store = {
  profile: [{
    userid: 1,
    user_name: "Jun Yin",
    education: "UCSC",
    email: "",
    work: "PowerSchool",
    current_city: "sacramento, ca",
    about_me: "a",
    friendList: 
      [
        {
          userid: 1,
          firstLast: "dog",
          photo: dog
        },
        {
          userid: 2,
          firstLast: "dog",
          photo: dog
        },
        {
          userid: 3,
          firstLast: "dog",
          photo: cat
        },
        {
          userid: 4,
          firstLast: "dog",
          photo: cat
        },
    ]
  }],
  pictures: [
    {
      id: "asdf",
      userid: 1,
      photo: dog
    },
    {
      id: "asdf",
      userid: 1,
      photo: dog
    },
    {
      id: "asdf",
      userid: 1,
      photo: dog
    },
    {
      id: "asdf",
      userid: 1,
      photo: dog
    }
  ],
  post: [
    {
      id: 1,
      user: "Jun Yin",
      status: "this project is hard",
      pictures: "a",
      time: "1/1/1",
      likes: 0,
      dislikes: 0,
      comments: 
      [
        {
          user: "Jun",
          comment: "You asdf sf asdf sdf sd f sdf as df asd fsa df sa dfs df sd fas df asdf as df sad fsa df sadf sad f sad fsd."
        },
        {
          user: "Jun",
          comment: "Can!"
        },
        {
          user: "Jun",
          comment: "Do it!"
        },
      ]
    },
    {
      id: 2,
      users_post: "Kindrick Yin",
      status: "Milk!",
      pictures: "",
      time: "1/1/1",
      likes: 0,
      dislikes: 0,
      comments: 
      [
        {
          user: "Jun",
          comment: "Hi Baby!"
        },
        {
          user: "Annie",
          comment: "Hi Baby!"
        },
      ]
    }
  ]
}

export default store