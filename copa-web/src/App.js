import React, { useEffect, useReducer } from 'react'
import { withAuthenticator } from 'aws-amplify-react' // or 'aws-amplify-react-native';
import Amplify, {
  PubSub,
  Auth,
  Analytics,
  Storage,
  API,
  graphqlOperation,
} from 'aws-amplify'
import styled from 'styled-components'

import { listCategorys, listAssets } from './graphql/queries'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)
API.configure(awsconfig) // Configure Amplify
PubSub.configure(awsconfig)

async function createNewTodo() {
  const todo = { name: 'Use AppSync', description: 'Realtime and Offline' }
  // await API.graphql(graphqlOperation(createTodo, { input: todo }))
}

const initialState = { categories: [], assets: [] }
const reducer = (state, action) => {
  switch (action.type) {
    case 'QUERY':
      return {
        ...state,
        categories: [...action.categories],
        assets: [...action.assets],
      }
    case 'SUBSCRIPTION':
      return { ...state, todos: [...state.todos, action.todo] }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getData()
    //   const subscription = API.graphql(graphqlOperation(onCreateTodo)).subscribe({
    //     next: eventData => {
    //       const todo = eventData.value.data.onCreateTodo
    //       dispatch({ type: 'SUBSCRIPTION', todo })
    //     },
    //   })
    //   return () => subscription.unsubscribe()
  }, [])

  async function getData() {
    const categoryData = await API.graphql(graphqlOperation(listCategorys))
    const assetData = await API.graphql(graphqlOperation(listAssets))
    console.log(categoryData)
    dispatch({
      type: 'QUERY',
      categories: categoryData.data.listCategorys.items,
      assets: assetData.data.listAssets.items,
    })
  }

  console.log(state)
  return (
    <Main>
      <Header>
        <HeaderLogo>
          <HeaderImage src="https://image.flaticon.com/icons/svg/181/181548.svg"></HeaderImage>
          <HeaderText>Copa</HeaderText>
        </HeaderLogo>
        <Account>Sign Out</Account>
      </Header>
      <Categories>
        {
          state.categories.map(item => (
          <CategoryContainer>
            <Category>
              <h1>{item.categoryName}</h1>
              <AssetGroupContainer>
                <AssetGroup>
                  {categoryAssets = state.assets.filter((assetItem, idx) => (assetItem.categoryId === item.id))
                    if (idx === 1 || idx === 2 || idx === 3 || idx === 0) {
                      return (
                        <AssetThumbnail
                          thumbnailNum={idx + 1}
                          src={assetItem.thumbnailUrl}
                        ></AssetThumbnail>
                      )
                    }
                  })}
                  <h2>Tables (3)</h2>
                </AssetGroup>
              </AssetGroupContainer>
            </Category>
          </CategoryContainer>
        ))}
      </Categories>
      <Context>
        <ContextContainer>
          <ContextTitle>My Owned Items (6)</ContextTitle>
          <AssetItem>
            VIZIO P-Series Quantum 65” Class 4K HDR Smart TV
          </AssetItem>
        </ContextContainer>
      </Context>
    </Main>
  )
}

export default withAuthenticator(App, { usernameAttributes: 'email' })

const Main = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: 66px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-areas:
    'header header'
    'category context';
`

const Header = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: row;
  border: 1px solid green;
  background: #494956;
  align-items: center;
  cursor: pointer;
`

const HeaderImage = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 12px;
  margin-right: 12px;
`

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 160px;
`

const HeaderText = styled.h1`
  color: white;
`

const Account = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  height: 100%;
  width: 100px;
  color: white;
  cursor: pointer;
`

const Categories = styled.div`
  grid-area: category;
  border: 1px solid red;
`

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Context = styled.div`
  grid-area: context;
  border: 1px solid blue;
`

const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 24px;
`

const Category = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  width: 100%;
`

const AssetGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const AssetGroup = styled.div`
  width: 360px;
  height: 256px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-areas:
    'thumb1 thumb2'
    'thumb3 thumb4';
`

const AssetThumbnail = styled.img`
  grid-area: ${props => 'thumb' + props.thumbnailNum};
  width: 100%;
  height: 100%;
`

const ContextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ContextTitle = styled.h2``

const AssetItem = styled.div`
  height: 230px;
`
