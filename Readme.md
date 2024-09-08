# API IBRP Website

API created to used at the main website IBPR(Iglesia Bautista Panambireta) 


## Documentation

[Documentation](https://github.com/rickyMelida/Api.IBPR.WebSite)

## Activites

#### Get all activites

```http
  GET /api/Activity
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `none` | Return all activites to the Church|

#### Get activity by Id

```http
  GET /api/Activity/GetActivity/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` | Return an activity to the Church by Id |

## Articles

#### Get all articles

```http
  GET /api/Article
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `none` | Return all articles |

#### Get article by Id

```http
  GET /api/Article/GetArticle/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` | Return an article by Id |

#### Set an article

```http
  POST /api/Article/SetArticle
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `author` | `string` | Article's author |
| `text` | `string` | Articles's text in base64 |
| `title` | `string` | Article's title |
| `image` | `string` | Article's image related to the article in base64 |
| `verse` | `integer` | Article's verse related to the article |


#### Modify article by Id

```http
  PUT /api/Article/GetArticle/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` | Article's Id |
| `author` | `string` | New article's author |
| `text` | `string` | New articles's text in base64 |
| `title` | `string` | New article's title |
| `image` | `string` | New article's image related to the article in base64 |
| `verse` | `integer` | **Example:** *En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.* |


## Cover Images

#### Get all cover images

```http
  GET /api/CoverImage/GetCoverImages
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `none` | Return all articles |

#### Get all cover images

```http
  POST /api/CoverImage/SetCoverImages
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | Cover Image's Name. **Example:** Prayer's image |
| `picture` | `string` | Cover Image in base64 |
| `section` | `string` | **Example:** Main  |