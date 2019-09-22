/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = `query GetBlog($id: ID!) {
  getBlog(id: $id) {
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
export const listBlogs = `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      posts {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
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
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      post {
        id
        title
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getGroup = `query GetGroup($id: ID!) {
  getGroup(id: $id) {
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
export const listGroups = `query ListGroups(
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      groupName
      members {
        nextToken
      }
      categories {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getCategory = `query GetCategory($id: ID!) {
  getCategory(id: $id) {
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
export const listCategorys = `query ListCategorys(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      categoryName
      assets {
        nextToken
      }
      thread {
        id
      }
    }
    nextToken
  }
}
`;
export const getAsset = `query GetAsset($id: ID!) {
  getAsset(id: $id) {
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
export const listAssets = `query ListAssets(
  $filter: ModelAssetFilterInput
  $limit: Int
  $nextToken: String
) {
  listAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getUserBuyin = `query GetUserBuyin($id: ID!) {
  getUserBuyin(id: $id) {
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
export const listUserBuyins = `query ListUserBuyins(
  $filter: ModelUserBuyinFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserBuyins(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getThread = `query GetThread($id: ID!) {
  getThread(id: $id) {
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
export const listThreads = `query ListThreads(
  $filter: ModelThreadFilterInput
  $limit: Int
  $nextToken: String
) {
  listThreads(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      category {
        id
        categoryName
      }
      messages {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getMessage = `query GetMessage($id: ID!) {
  getMessage(id: $id) {
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
export const listMessages = `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user {
        id
        username
        email
        firstName
        lastName
        phoneNumber
      }
      timeSent
      thread {
        id
      }
    }
    nextToken
  }
}
`;
