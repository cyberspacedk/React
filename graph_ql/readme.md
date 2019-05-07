graphQL - язык для взыимодейтсвия с сервером для получения данных

REST - основаны на эндроинтах и работой с url строкой, где мы передаем все то что нам необходимо через параметры и пути.

- Запрос REST

```
https://site.com/api/user/1/post/1/comment

https://code.ru/api/post/author/42

```

- Запрос graphQl

```
query {
    posts(id:1){
        id
        title
        author{
            firstname
            lastname
        }
    }
}
```

Как работает

REST = посылает get запрос к базе откуда получает данные

graphQl = посылает http запрос (один маршрут для всех типов запроса) на gql сервер -> database -> clien

- get запрос

```
fetch('https://code.ru/graphql?query={post(id:1){...}}')
```

- post запрос

```
fetch('https://code.ru/graphql' , {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		query: `
			{
				posts(id:1){
					id
					title
					author{
							firstname
							lastname
					}
				}
			}
		`
	})
})
```

GQL - используется как посредник между клиентом и сервером, предоставляя единый API.

Основные понятия

1. Запрос - то что клиент отправляет на сервер и что хочет получить.

2. Тип - gql типизированный язык.

Перед тем как отправить запрос, нужно определить типы передаваемых полей в запросе

```
type Post{
	id: ID!
	title: String!
	content: String
	author: Author!
	status: Status!
	comment: [Comment]!
}
```

3. Изменение - изменение данных (аналог PUT DELETE UPDATE) ключевое слово mutation

```
mutation{
	createPost(input:{
		title: "Знакомство с GQL"
		content: "..."
		status: {
			firstname: "Олег"
			lastname: "Попов"
			status: DRAFT
		}
	})
}
```

Пример запросов с использованием fragment

```
query{
  graphql: repository(owner: "facebook", name: "graphql") {
    ...repoDetails
  }
  react: repository(owner: "facebook", name: "react") {
   ...repoDetails
  }
}

<!-- Определяем шаблон полей запроса -->

fragment repoDetails on Repository {
  name
  description
  createdAt
  homepageUrl
  id
  languages(first: 5) {
    nodes {
      name
    }
  }
}

```

### Переменные.

Пишутся через `$varname : vartype` также можно добавить !обязательна ли переменная иили нет

Объявим переменные owner и name, которые используем в как параметры в запросе

variables={
"owner" : ""facebook,
"name" : "react"
}

```
query GetRepos($owner: String!, $name: String!) {
  graphql: repository(owner: $owner, name: $name) {
    ...repoDetails
  }
}

fragment repoDetails on Repository {
  name
  description
  createdAt
  homepageUrl
  id
  languages(first: 5) {
    nodes {
      name
    }
  }
}
```

### Директивы

Нужны чтобы указать серверу определенные условия или хотим пропустить какието значения

Пишутся через @include(if : \$varname или другое условие)

```
query GetRepos($owner: String!, $name: String!, $includeIssues: Boolean!) {
  graphql: repository(owner: $owner, name: $name) {
    ...repoDetails
  }
}

fragment repoDetails on Repository {
  name
  description
  createdAt
  homepageUrl
  id
  issues(first: 10) @include(if : $includeIssues) {
    nodes {
      id
      author {
        login
      }
      body
    }
  }
}
```
