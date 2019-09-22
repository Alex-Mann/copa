import User from './models/user.js'
import {
  html,
  render,
  Component,
} from 'https://unpkg.com/htm/preact/standalone.module.js'

import FetchQL from 'https://unpkg.com/fetchql@3.0.0/lib/fetchql.es.js'

const fql = new FetchQL({
  url:
    'https://fijlpcwpibgebdmscy226fj2oq.appsync-api.us-east-1.amazonaws.com/graphql',
  headers: { 'x-api-key': 'da2-mzqcfxnjtzhvdo23xzqgdobvfu' },
})

class Copa extends Component {
  // Add `name` to the initial state
  state = { showOverlay: false, name: 'world' }

  onInput = ev => {
    this.setState({ value: ev.target.value })
  }

  onMouseOver = () => {
    this.setState({ showOverlay: true })
  }
  onMouseLeave = () => {
    this.setState({ showOverlay: false })
  }

  // Add a submit handler that updates the `name` with the latest input value
  onSubmit = () => {
    this.setState({ name: this.state.value })
  }

  render(props, state) {
    let num_members = 4
    let pricepp = (props.price / num_members).toFixed(2)
    return html`
      <span
        style="float: right"
        onMouseOver=${this.onMouseOver}
        onMouseLeave=${this.onMouseLeave}
      >
        <${CopaOverlay}
          show=${state.showOverlay}
          pricepp=${pricepp}
          num_members=${num_members}
        />
        <${CopaPrice} pricepp=${pricepp} num_members=${num_members} />
      </span>
    `
  }
}

class CopaPrice extends Component {
  render(props, state) {
    return html`
      <span>
        <span
          style="
    font-size: medium;
    font-weight: 600;
    color: dodgerblue;
"
          >CDN$ ${props.pricepp}</span
        >
        <span style="font-size:small; font-weight:600; margin: 8px;"
          >x${props.num_members}</span
        >
        <img
          src="https://image.flaticon.com/icons/svg/181/181548.svg"
          alt="Group"
          title="Group Icon"
          width="16"
          height="16"
        />
        <span style="font-size: medium;font-weight: 700;"> copa</span>
      </span>
    `
  }
}

class CopaOverlay extends Component {
  // Add `name` to the initial state
  state = { isHovering: false, newCategory: '', categories: [], added: false }

  componentDidMount() {
    this.fetchCategories()
  }

  fetchCategories = async () => {
    const categories = await fql.query({
      operationName: 'getCategories',
      query: `query getCategories {
        listCategorys {
          items {
            id
            categoryName
          }
        }
      }`,
    })
    this.setState({ categories: [...categories.data.listCategorys.items] })
  }

  onInput = ev => {
    console.dir(ev.target.value)
    this.setState({ newCategory: ev.target.value })
  }

  onMouseOver = () => {
    this.setState({ showOverlay: true })
  }
  onMouseLeave = () => {
    this.setState({ showOverlay: false })
  }

  // Add a submit handler that updates the `name` with the latest input value
  onSubmit = async () => {
    console.log(this.state.newCategory)
    try {
      await this.createCategory(this.state.newCategory)
      await this.fetchCategories()
      this.setState({ newCategory: '' })
    } catch (err) {
      console.log(err)
    }
  }

  createCategory = categoryName => {
    return fql.query({
      operationName: 'createCategory',
      query: `mutation createCategory {
        createCategory(input: {categoryName: "${categoryName}"}) {
          id
        }
      }`,
    })
  }

  saveItem = async categoryId => {
    const name = document.querySelector('#productTitle').innerText.trim()
    let price = document.querySelector('#priceblock_ourprice').innerHTML
    price = parseFloat(price.split('&nbsp;')[1])
    let thumbnailUrl = document.querySelector('#landingImage').src
    let assetId = await fql.query({
      operationName: 'createAsset',
      query: `mutation createAsset {
        createAsset(input: {name: "${name}", price: ${price}, url: "${document.location.href}", thumbnailUrl: "${thumbnailUrl}"}) {
          id
        }
      }`})
    assetId = assetId.data.createAsset.id
    console.log(assetId)
    await fql.query({
      operationName: 'updateAsset',
      query: `mutation updateAsset {
        updateAsset(input: {id: "${assetId}", assetCategoryId: "${categoryId}"}) {
          id
         }
      }`})
    this.setState({ added: true })
    setTimeout(() => this.setState({added: false}), 2000)
  }

  render(props, state) {
    let num_members = 4
    return html`
      <div
        style="
          display: ${props.show === false &&
          state.isHovering === false &&
          'none'};
          position: absolute;
          z-index: 1000;
          width: 263px;
          height: 254px;
          background: #FFFFFF;
          border: 1.5px solid #DDDDDD;
          box-sizing: border-box;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 5px;
          padding: 16px;
      "
        onMouseOver=${this.onMouseOver}
        onMouseLeave=${this.onMouseLeave}
      >
        <div
          style="flex-direction: column;display: flex;height: 100%;justify-content: space-around;"
        >
          <${CopaPrice}
            pricepp=${props.pricepp}
            num_members=${props.num_members}
          />
          ${this.state.added &&
            html`
              <span style="font-size: medium;font-weight: 700;"> Added!</span>
            `}
          <a>Save to your wishlist</a>
          ${this.state.categories.map(
            item =>
              html`
                <a onClick=${() => this.saveItem(item.id)}
                  >${item.categoryName} (3) »</a
                >
              `,
          )}
          <input
            type="text"
            onInput=${this.onInput}
            onSubmit=${this.onSubmit}
            value=${state.newCategory}
          />
          <button onClick=${this.onSubmit}>
            Create new
          </button>

          <div
            style="margin-bottom: 0;display: flex;justify-content: space-between; font-size: smaller;"
          >
            <a>Invite Friends</a>
            <a>Copa Dashboard</a>
          </div>
        </div>
      </div>
    `
  }
}

export function main() {
  let price = document.querySelector('#priceblock_ourprice').innerHTML
  price = parseFloat(price.split('&nbsp;')[1])
  let ele = document.querySelector('#priceblock_ourprice_row > td.a-span12')
  let copaEle = document.createElement('span')
  ele.append(copaEle)
  render(
    html`
      <${Copa} price=${price} />
    `,
    copaEle,
  )
}
