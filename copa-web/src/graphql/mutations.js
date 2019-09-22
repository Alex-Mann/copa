/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = `mutation CreateBlog($input: CreateBlogInput!) {
  createBlog(input: $input) {
    id
    name
    posts {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const updateBlog = `mutation UpdateBlog($input: UpdateBlogInput!) {
  updateBlog(input: $input) {
    id
    name
    posts {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const deleteBlog = `mutation DeleteBlog($input: DeleteBlogInput!) {
  deleteBlog(input: $input) {
    id
    name
    posts {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    blog {
      id
      name
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    title
    blog {
      id
      name
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    title
    blog {
      id
      name
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    content
    post {
      id
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    content
    post {
      id
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    content
    post {
      id
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    username
    email
    firstName
    lastName
    phoneNumber
    assets {
      items {
        id
        name
        price
        thumbnailUrl
        purchased
        purchasedDate
        purchasedFrom
        settledUp
        url
        tags
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    username
    email
    firstName
    lastName
    phoneNumber
    assets {
      items {
        id
        name
        price
        thumbnailUrl
        purchased
        purchasedDate
        purchasedFrom
        settledUp
        url
        tags
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    username
    email
    firstName
    lastName
    phoneNumber
    assets {
      items {
        id
        name
        price
        thumbnailUrl
        purchased
        purchasedDate
        purchasedFrom
        settledUp
        url
        tags
      }
      nextToken
    }
  }
}
`;
export const createGroup = `mutation CreateGroup($input: CreateGroupInput!) {
  createGroup(input: $input) {
    id
    groupName
    members {
      items {
        id
        username
        email
        firstName
        lastName
        phoneNumber
      }
      nextToken
    }
    categories {
      items {
        id
        categoryName
      }
      nextToken
    }
  }
}
`;
export const updateGroup = `mutation UpdateGroup($input: UpdateGroupInput!) {
  updateGroup(input: $input) {
    id
    groupName
    members {
      items {
        id
        username
        email
        firstName
        lastName
        phoneNumber
      }
      nextToken
    }
    categories {
      items {
        id
        categoryName
      }
      nextToken
    }
  }
}
`;
export const deleteGroup = `mutation DeleteGroup($input: DeleteGroupInput!) {
  deleteGroup(input: $input) {
    id
    groupName
    members {
      items {
        id
        username
        email
        firstName
        lastName
        phoneNumber
      }
      nextToken
    }
    categories {
      items {
        id
        categoryName
      }
      nextToken
    }
  }
}
`;
export const createCategory = `mutation CreateCategory($input: CreateCategoryInput!) {
  createCategory(input: $input) {
    id
    categoryName
    assets {
      items {
        id
        name
        price
        thumbnailUrl
        purchased
        purchasedDate
        purchasedFrom
        settledUp
        url
        tags
      }
      nextToken
    }
    thread {
      id
      category {
        id
        categoryName
      }
      messages {
        nextToken
      }
    }
  }
}
`;
export const updateCategory = `mutation UpdateCategory($input: UpdateCategoryInput!) {
  updateCategory(input: $input) {
    id
    categoryName
    assets {
      items {
        id
        name
        price
        thumbnailUrl
        purchased
        purchasedDate
        purchasedFrom
        settledUp
        url
        tags
      }
      nextToken
    }
    thread {
      id
      category {
        id
        categoryName
      }
      messages {
        nextToken
      }
    }
  }
}
`;
export const deleteCategory = `mutation DeleteCategory($input: DeleteCategoryInput!) {
  deleteCategory(input: $input) {
    id
    categoryName
    assets {
      items {
        id
        name
        price
        thumbnailUrl
        purchased
        purchasedDate
        purchasedFrom
        settledUp
        url
        tags
      }
      nextToken
    }
    thread {
      id
      category {
        id
        categoryName
      }
      messages {
        nextToken
      }
    }
  }
}
`;
export const createAsset = `mutation CreateAsset($input: CreateAssetInput!) {
  createAsset(input: $input) {
    id
    name
    price
    thumbnailUrl
    ownedBy {
      items {
        id
        username
        email
        firstName
        lastName
        phoneNumber
      }
      nextToken
    }
    purchased
    buyIn {
      user {
        id
        username
        email
        firstName
        lastName
        phoneNumber
      }
      asset {
        id
        name
        price
        thumbnailUrl
        purchased
        purchasedDate
        purchasedFrom
        settledUp
        url
        tags
      }
      buyIn
    }
    purchasedDate
    purchasedBy {
      id
      username
      email
      firstName
      lastName
      phoneNumber
      assets {
        nextToken
      }
    }
    purchasedFrom
    settledUp
    url
    category {
      id
      categoryName
      assets {
        nextToken
      }
      thread {
        id
      }
    }
    tags
  }
}
`;
export const updateAsset = `mutation UpdateAsset($input: UpdateAssetInput!) {
  updateAsset(input: $input) {
    id
    name
    price
    thumbnailUrl
    ownedBy {
      items {
        id
        username
        email
        firstName
        lastName
        phoneNumber
      }
      nextToken
    }
    purchased
    buyIn {
      user {
        id
        username
        email
        firstName
        lastName
        phoneNumber
      }
      asset {
        id
        name
        price
        thumbnailUrl
        purchased
        purchasedDate
        purchasedFrom
        settledUp
        url
        tags
      }
      buyIn
    }
    purchasedDate
    purchasedBy {
      id
      username
      email
      firstName
      lastName
      phoneNumber
      assets {
        nextToken
      }
    }
    purchasedFrom
    settledUp
    url
    category {
      id
      categoryName
      assets {
        nextToken
      }
      thread {
        id
      }
    }
    tags
  }
}
`;
export const deleteAsset = `mutation DeleteAsset($input: DeleteAssetInput!) {
  deleteAsset(input: $input) {
    id
    name
    price
    thumbnailUrl
    ownedBy {
      items {
        id
        username
        email
        firstName
        lastName
        phoneNumber
      }
      nextToken
    }
    purchased
    buyIn {
      user {
        id
        username
        email
        firstName
        lastName
        phoneNumber
      }
      asset {
        id
        name
        price
        thumbnailUrl
        purchased
        purchasedDate
        purchasedFrom
        settledUp
        url
        tags
      }
      buyIn
    }
    purchasedDate
    purchasedBy {
      id
      username
      email
      firstName
      lastName
      phoneNumber
      assets {
        nextToken
      }
    }
    purchasedFrom
    settledUp
    url
    category {
      id
      categoryName
      assets {
        nextToken
      }
      thread {
        id
      }
    }
    tags
  }
}
`;
export const createUserBuyin = `mutation CreateUserBuyin($input: CreateUserBuyinInput!) {
  createUserBuyin(input: $input) {
    user {
      id
      username
      email
      firstName
      lastName
      phoneNumber
      assets {
        nextToken
      }
    }
    asset {
      id
      name
      price
      thumbnailUrl
      ownedBy {
        nextToken
      }
      purchased
      buyIn {
        buyIn
      }
      purchasedDate
      purchasedBy {
        id
        username
        email
        firstName
        lastName
        phoneNumber
      }
      purchasedFrom
      settledUp
      url
      category {
        id
        categoryName
      }
      tags
    }
    buyIn
  }
}
`;
export const updateUserBuyin = `mutation UpdateUserBuyin($input: UpdateUserBuyinInput!) {
  updateUserBuyin(input: $input) {
    user {
      id
      username
      email
      firstName
      lastName
      phoneNumber
      assets {
        nextToken
      }
    }
    asset {
      id
      name
      price
      thumbnailUrl
      ownedBy {
        nextToken
      }
      purchased
      buyIn {
        buyIn
      }
      purchasedDate
      purchasedBy {
        id
        username
        email
        firstName
        lastName
        phoneNumber
      }
      purchasedFrom
      settledUp
      url
      category {
        id
        categoryName
      }
      tags
    }
    buyIn
  }
}
`;
export const deleteUserBuyin = `mutation DeleteUserBuyin($input: DeleteUserBuyinInput!) {
  deleteUserBuyin(input: $input) {
    user {
      id
      username
      email
      firstName
      lastName
      phoneNumber
      assets {
        nextToken
      }
    }
    asset {
      id
      name
      price
      thumbnailUrl
      ownedBy {
        nextToken
      }
      purchased
      buyIn {
        buyIn
      }
      purchasedDate
      purchasedBy {
        id
        username
        email
        firstName
        lastName
        phoneNumber
      }
      purchasedFrom
      settledUp
      url
      category {
        id
        categoryName
      }
      tags
    }
    buyIn
  }
}
`;
export const createThread = `mutation CreateThread($input: CreateThreadInput!) {
  createThread(input: $input) {
    id
    category {
      id
      categoryName
      assets {
        nextToken
      }
      thread {
        id
      }
    }
    messages {
      items {
        id
        timeSent
      }
      nextToken
    }
  }
}
`;
export const updateThread = `mutation UpdateThread($input: UpdateThreadInput!) {
  updateThread(input: $input) {
    id
    category {
      id
      categoryName
      assets {
        nextToken
      }
      thread {
        id
      }
    }
    messages {
      items {
        id
        timeSent
      }
      nextToken
    }
  }
}
`;
export const deleteThread = `mutation DeleteThread($input: DeleteThreadInput!) {
  deleteThread(input: $input) {
    id
    category {
      id
      categoryName
      assets {
        nextToken
      }
      thread {
        id
      }
    }
    messages {
      items {
        id
        timeSent
      }
      nextToken
    }
  }
}
`;
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
    id
    user {
      id
      username
      email
      firstName
      lastName
      phoneNumber
      assets {
        nextToken
      }
    }
    timeSent
    thread {
      id
      category {
        id
        categoryName
      }
      messages {
        nextToken
      }
    }
  }
}
`;
export const updateMessage = `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
    id
    user {
      id
      username
      email
      firstName
      lastName
      phoneNumber
      assets {
        nextToken
      }
    }
    timeSent
    thread {
      id
      category {
        id
        categoryName
      }
      messages {
        nextToken
      }
    }
  }
}
`;
export const deleteMessage = `mutation DeleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input) {
    id
    user {
      id
      username
      email
      firstName
      lastName
      phoneNumber
      assets {
        nextToken
      }
    }
    timeSent
    thread {
      id
      category {
        id
        categoryName
      }
      messages {
        nextToken
      }
    }
  }
}
`;
