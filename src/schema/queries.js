import gql from 'graphql-tag'

export const POC_SEARCH = gql`
  query pocSearchMethod(
    $now: DateTime!
    $algorithm: String!
    $lat: String!
    $long: String!
  ) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      __typename
      id
      status
      tradingName
      officialName
      address {
        __typename
        address1
        address2
        number
        city
        province
        zip
        coordinates
      }
    }
  }
`

export const GET_POC_CATEGORIES = gql`
  query allCategoriesSearch {
    allCategory {
      title
      id
    }
  }
`

export const GET_POC_PRODUCTS = gql`
  query poc($id: ID!, $categoryId: Int, $search: String) {
    poc(id: $id) {
      id
      products(categoryId: $categoryId, search: $search) {
        id
        title
        rgb
        images {
          url
        }
        productVariants {
          availableDate
          productVariantId
          price
          inventoryItemId
          shortDescription
          title
          published
          volume
          volumeUnit
          description
          subtitle
          components {
            id
            productVariantId
            productVariant {
              id
              title
              description
              shortDescription
            }
          }
        }
      }
    }
  }
`
