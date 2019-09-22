/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = `subscription OnCreateBlog {
  onCreateBlog {
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
export const onUpdateBlog = `subscription OnUpdateBlog {
  onUpdateBlog {
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
export const onDeleteBlog = `subscription OnDeleteBlog {
  onDeleteBlog {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateGroup = `subscription OnCreateGroup {
  onCreateGroup {
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
export const onUpdateGroup = `subscription OnUpdateGroup {
  onUpdateGroup {
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
export const onDeleteGroup = `subscription OnDeleteGroup {
  onDeleteGroup {
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
export const onCreateCategory = `subscription OnCreateCategory {
  onCreateCategory {
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
export const onUpdateCategory = `subscription OnUpdateCategory {
  onUpdateCategory {
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
export const onDeleteCategory = `subscription OnDeleteCategory {
  onDeleteCategory {
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
export const onCreateAsset = `subscription OnCreateAsset {
  onCreateAsset {
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
export const onUpdateAsset = `subscription OnUpdateAsset {
  onUpdateAsset {
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
export const onDeleteAsset = `subscription OnDeleteAsset {
  onDeleteAsset {
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
export const onCreateUserBuyin = `subscription OnCreateUserBuyin {
  onCreateUserBuyin {
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
export const onUpdateUserBuyin = `subscription OnUpdateUserBuyin {
  onUpdateUserBuyin {
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
export const onDeleteUserBuyin = `subscription OnDeleteUserBuyin {
  onDeleteUserBuyin {
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
export const onCreateThread = `subscription OnCreateThread {
  onCreateThread {
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
export const onUpdateThread = `subscription OnUpdateThread {
  onUpdateThread {
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
export const onDeleteThread = `subscription OnDeleteThread {
  onDeleteThread {
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
export const onCreateMessage = `subscription OnCreateMessage {
  onCreateMessage {
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
export const onUpdateMessage = `subscription OnUpdateMessage {
  onUpdateMessage {
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
export const onDeleteMessage = `subscription OnDeleteMessage {
  onDeleteMessage {
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
