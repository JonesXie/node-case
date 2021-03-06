---
title: 学习项目 v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

# 学习项目

> v1.0.0

个人学习测试使用项目

# 宠物店（示例）

## PUT 修改宠物信息

PUT /pet

> Body 请求参数

```json
{
  "type": "object",
  "properties": {}
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|

> 返回示例

> 成功

```json
{
  "code": 0,
  "data": {
    "name": "Hello Kity",
    "photoUrls": [
      "http://dummyimage.com/400x400"
    ],
    "id": 3,
    "category": {
      "id": 71,
      "name": "Cat"
    },
    "tags": [
      {
        "id": 22,
        "name": "Cat"
      }
    ],
    "status": "sold"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|记录不存在|Inline|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|验证错误|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» data|[Pet](#schemapet)|true|none|none|
|»» id|integer(int64)|true|none|宠物ID编号|
|»» category|[Category](#schemacategory)|true|none|none|
|»»» id|integer(int64)|false|none|分类ID编号|
|»»» name|string|false|none|分类名称|
|»» name|string|true|none|名称|
|»» photoUrls|[string]|true|none|照片URL|
|»» tags|[[Tag](#schematag)]|true|none|标签|
|»»» id|integer(int64)|false|none|标签ID编号|
|»»» name|string|false|none|标签名称|
|»» status|string|true|none|宠物销售状态|

#### 枚举值

|属性|值|
|---|---|
|status|available|
|status|pending|
|status|sold|

## POST 新建宠物信息

POST /pet

> Body 请求参数

```yaml
type: object
properties:
  name:
    type: string
    description: 宠物名
    example: Hello Kitty
  status:
    type: string
    description: 宠物销售状态
    example: sold
required:
  - name
  - status

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|true|宠物名|
|» status|body|string|true|宠物销售状态|

> 返回示例

> 成功

```json
{
  "code": 0,
  "data": {
    "name": "Hello Kity",
    "photoUrls": [
      "http://dummyimage.com/400x400"
    ],
    "id": 3,
    "category": {
      "id": 71,
      "name": "Cat"
    },
    "tags": [
      {
        "id": 22,
        "name": "Cat"
      }
    ],
    "status": "sold"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|成功|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» data|[Pet](#schemapet)|true|none|none|
|»» id|integer(int64)|true|none|宠物ID编号|
|»» category|[Category](#schemacategory)|true|none|none|
|»»» id|integer(int64)|false|none|分类ID编号|
|»»» name|string|false|none|分类名称|
|»» name|string|true|none|名称|
|»» photoUrls|[string]|true|none|照片URL|
|»» tags|[[Tag](#schematag)]|true|none|标签|
|»»» id|integer(int64)|false|none|标签ID编号|
|»»» name|string|false|none|标签名称|
|»» status|string|true|none|宠物销售状态|

#### 枚举值

|属性|值|
|---|---|
|status|available|
|status|pending|
|status|sold|

## GET 查询宠物详情

GET /pet/{petId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|petId|path|string|true|宠物 ID|

> 返回示例

> 成功

```json
{
  "code": 0,
  "data": {
    "name": "Hello Kity",
    "photoUrls": [
      "http://dummyimage.com/400x400"
    ],
    "id": 3,
    "category": {
      "id": 71,
      "name": "Cat"
    },
    "tags": [
      {
        "id": 22,
        "name": "Cat"
      }
    ],
    "status": "sold"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|状态码|
|» data|[Pet](#schemapet)|true|none|none|
|»» id|integer(int64)|true|none|宠物ID编号|
|»» category|[Category](#schemacategory)|true|none|none|
|»»» id|integer(int64)|false|none|分类ID编号|
|»»» name|string|false|none|分类名称|
|»» name|string|true|none|名称|
|»» photoUrls|[string]|true|none|照片URL|
|»» tags|[[Tag](#schematag)]|true|none|标签|
|»»» id|integer(int64)|false|none|标签ID编号|
|»»» name|string|false|none|标签名称|
|»» status|string|true|none|宠物销售状态|

#### 枚举值

|属性|值|
|---|---|
|status|available|
|status|pending|
|status|sold|

## DELETE 删除宠物信息

DELETE /pet/{petId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|petId|path|string|true|Pet id to delete|
|api_key|header|string|false|none|

> 返回示例

> 成功

```json
{
  "code": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|

## GET 根据状态查找宠物列表

GET /pet/findByStatus

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|status|query|string|true|Status values that need to be considered for filter|

> 返回示例

> 成功

```json
{
  "code": 0,
  "data": [
    {
      "name": "Hello Kity",
      "photoUrls": [
        "http://dummyimage.com/400x400"
      ],
      "id": 3,
      "category": {
        "id": 71,
        "name": "Cat"
      },
      "tags": [
        {
          "id": 22,
          "name": "Cat"
        }
      ],
      "status": "sold"
    },
    {
      "name": "White Dog",
      "photoUrls": [
        "http://dummyimage.com/400x400"
      ],
      "id": 3,
      "category": {
        "id": 71,
        "name": "Dog"
      },
      "tags": [
        {
          "id": 22,
          "name": "Dog"
        }
      ],
      "status": "sold"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|错误的 status 值|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|*anonymous*|[[Pet](#schemapet)]|false|none|none|
|» id|integer(int64)|true|none|宠物ID编号|
|» category|[Category](#schemacategory)|true|none|none|
|»» id|integer(int64)|false|none|分类ID编号|
|»» name|string|false|none|分类名称|
|» name|string|true|none|名称|
|» photoUrls|[string]|true|none|照片URL|
|» tags|[[Tag](#schematag)]|true|none|标签|
|»» id|integer(int64)|false|none|标签ID编号|
|»» name|string|false|none|标签名称|
|» status|string|true|none|宠物销售状态|

#### 枚举值

|属性|值|
|---|---|
|status|available|
|status|pending|
|status|sold|

状态码 **400**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|

# node-case/用户

## POST 登录

POST /login

> Body 请求参数

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "title": "姓名"
    },
    "password": {
      "type": "string"
    }
  },
  "required": [
    "name",
    "password"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|true|none|
|» password|body|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 创建用户

POST /user

> Body 请求参数

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "title": "姓名"
    },
    "password": {
      "type": "string",
      "title": "密码"
    }
  },
  "required": [
    "name",
    "password"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|true|none|
|» password|body|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 登录测试

GET /test

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string|true|登录token|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# node-case/动态

## GET 获取内容

GET /moment/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 发表动态

POST /moment

> Body 请求参数

```json
{
  "type": "object",
  "properties": {
    "content": {
      "type": "string"
    }
  },
  "required": [
    "content"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string|true|none|
|body|body|object|false|none|
|» content|body|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 获取列表

GET /moment

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|offset|query|string|true|none|
|size|query|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## PATCH 修改动态

PATCH /moment/{momentId}

> Body 请求参数

```json
{
  "type": "object",
  "properties": {
    "content": {
      "type": "string"
    }
  },
  "required": [
    "content"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|momentId|path|string|true|none|
|Authorization|header|string|false|none|
|body|body|object|false|none|
|» content|body|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## DELETE 删除动态

DELETE /moment/{momentId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|momentId|path|string|true|none|
|Authorization|header|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 动态添加标签

POST /moment/{momentId}/labels

> Body 请求参数

```json
{
  "type": "object",
  "properties": {
    "labels": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "labels"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|momentId|path|string|true|none|
|Authorization|header|string|true|none|
|body|body|object|false|none|
|» labels|body|[string]|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# node-case/评论

## PATCH 修改评论

PATCH /comment/{commentId}

> Body 请求参数

```json
{
  "type": "object",
  "properties": {
    "content": {
      "type": "string"
    }
  },
  "required": [
    "content"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|commentId|path|string|true|none|
|Authorization|header|string|true|none|
|body|body|object|false|none|
|» content|body|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## DELETE 删除评论

DELETE /comment/{commentId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|commentId|path|string|true|none|
|Authorization|header|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 获取动态下的评论列表

GET /comment

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|momentId|query|string|true|none|
|Authorization|header|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 发布评论

POST /comment

> Body 请求参数

```json
{
  "type": "object",
  "properties": {
    "content": {
      "type": "string"
    },
    "momentId": {
      "type": "integer"
    }
  },
  "required": [
    "content",
    "momentId"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string|true|none|
|body|body|object|false|none|
|» content|body|string|true|none|
|» momentId|body|integer|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 回复评论

POST /comment/{commentId}/reply

> Body 请求参数

```json
{
  "type": "object",
  "properties": {
    "content": {
      "type": "string"
    },
    "momentId": {
      "type": "integer"
    }
  },
  "required": [
    "content",
    "momentId"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|commentId|path|string|true|none|
|Authorization|header|string|true|none|
|body|body|object|false|none|
|» content|body|string|true|none|
|» momentId|body|integer|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# node-case/标签

## POST 添加标签

POST /label

> Body 请求参数

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    }
  },
  "required": [
    "name"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string|true|none|
|body|body|object|false|none|
|» name|body|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 获取标签列表

GET /label

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|offset|query|string|true|none|
|size|query|string|true|none|
|Authorization|header|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# node-case/文件

## POST 上传多个图片(5个)

POST /upload/pics

> Body 请求参数

```yaml
type: object
properties:
  pictures:
    type: string
    format: binary
  picture:
    type: string
    format: binary
required:
  - pictures

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string|true|none|
|body|body|object|false|none|
|» pictures|body|string(binary)|true|none|
|» picture|body|string(binary)|false|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 图片地址

GET /upload/show/{picname}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|picname|path|string|true|none|
|type|query|string|false|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 上传单个图片

POST /upload/pic

> Body 请求参数

```yaml
type: object
properties:
  picture:
    type: string
    format: binary
required:
  - picture

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string|true|none|
|body|body|object|false|none|
|» picture|body|string(binary)|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 数据模型

<h2 id="tocS_Pet">Pet</h2>
<!-- backwards compatibility -->
<a id="schemapet"></a>
<a id="schema_Pet"></a>
<a id="tocSpet"></a>
<a id="tocspet"></a>

```json
{
  "required": [
    "name",
    "photoUrls",
    "id",
    "category",
    "tags",
    "status"
  ],
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "minimum": 1,
      "maximum": 5000,
      "description": "宠物ID编号"
    },
    "category": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "minimum": 1,
          "description": "分类ID编号"
        },
        "name": {
          "type": "string",
          "description": "分类名称"
        }
      },
      "xml": {
        "name": "Category"
      }
    },
    "name": {
      "type": "string",
      "example": "doggie",
      "description": "名称"
    },
    "photoUrls": {
      "type": "array",
      "xml": {
        "name": "photoUrl",
        "wrapped": true
      },
      "items": {
        "type": "string"
      },
      "description": "照片URL"
    },
    "tags": {
      "type": "array",
      "xml": {
        "name": "tag",
        "wrapped": true
      },
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "minimum": 1,
            "description": "标签ID编号"
          },
          "name": {
            "type": "string",
            "description": "标签名称"
          }
        },
        "xml": {
          "name": "Tag"
        }
      },
      "description": "标签"
    },
    "status": {
      "type": "string",
      "description": "宠物销售状态",
      "enum": [
        "available",
        "pending",
        "sold"
      ]
    }
  },
  "xml": {
    "name": "Pet"
  }
}

```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|id|integer(int64)|true|none|宠物ID编号|
|category|[Category](#schemacategory)|true|none|none|
|name|string|true|none|名称|
|photoUrls|[string]|true|none|照片URL|
|tags|[[Tag](#schematag)]|true|none|标签|
|status|string|true|none|宠物销售状态|

#### 枚举值

|属性|值|
|---|---|
|status|available|
|status|pending|
|status|sold|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "minimum": 1,
      "description": "分类ID编号"
    },
    "name": {
      "type": "string",
      "description": "分类名称"
    }
  },
  "xml": {
    "name": "Category"
  }
}

```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|id|integer(int64)|false|none|分类ID编号|
|name|string|false|none|分类名称|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "minimum": 1,
      "description": "标签ID编号"
    },
    "name": {
      "type": "string",
      "description": "标签名称"
    }
  },
  "xml": {
    "name": "Tag"
  }
}

```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|id|integer(int64)|false|none|标签ID编号|
|name|string|false|none|标签名称|

