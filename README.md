# HTTP Response Builder

A TypeScript package that provides a flexible and type-safe way to build HTTP responses with support for pagination, metadata, and standard HTTP status codes.

## Features

- Builder pattern for constructing HTTP responses
- Type-safe response data handling with generics
- Built-in pagination support
- Metadata support for additional response information
- Comprehensive HTTP status codes and messages
- Fluent interface for method chaining

## Installation

```bash
npm install @anot/http-response-builder
# or
yarn add @anot/http-response-builder
```

## Basic Usage

The package provides a builder pattern to construct HTTP responses. Here's a simple example:

```typescript
import { HttpResponseBuilder } from '@anot/http-response-builder';

const response = HttpResponseBuilder.ok()
    .setData({ message: 'Hello World' })
    .build();
```

## Usage with NestJS

### Controller Example

```typescript
import { Controller, Get } from '@nestjs/common';
import { HttpResponseBuilder, Paging } from '@anot/http-response-builder';

interface UserDTO {
  id: number;
  name: string;
  email: string;
}

@Controller('users')
export class UsersController {
  @Get()
  async getUsers(): Response<UserDTO[]> {
    const users: UserDTO[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
    ];

    const totalUsers = users.length;
    const paging = new Paging(1, 10, totalUsers);

    return HttpResponseBuilder.ok<UserDTO[]>()
      .setData(users)
      .setPaging(paging)
      .setMetadata({ timestamp: new Date() })
      .build();
  }

  @Get(':id')
  async getUser(): Response<UserDTO> {
    const user: UserDTO = { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com' 
    };

    return HttpResponseBuilder.ok<UserDTO>()
      .setData(user)
      .build();
  }
}
```

## Usage with Express

### Route Handler Example

```typescript
import express from "express";
const app = express();
import { HttpResponseBuilder, Paging, Response } from "@anot/http-response-builder";

var server = app.listen(3000, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

var photoList = [
  {
    id: "001",
    name: "photo001.jpg",
    type: "jpg",
    dataUrl: "http://localhost:3000/data/photo001.jpg",
  },
  {
    id: "002",
    name: "photo002.jpg",
    type: "jpg",
    dataUrl: "http://localhost:3000/data/photo002.jpg",
  },
];

app.get("/api/photo/list", function (req, res, next) {
  const results = HttpResponseBuilder.ok().setData(photoList).setMessage("Get photo list");
  res.json(results);
});
```

## Pagination Support

The `Paging` class provides pagination functionality:

```typescript
const paging = new Paging(1, 10, 100);  // page 1, 10 items per page, 100 total items
const response = HttpResponseBuilder.ok<UserDTO[]>()
    .setData(users)
    .setPaging(paging)
    .build();
```

## Metadata Support

You can include additional metadata in your response:

```typescript
const metadata = {
    timestamp: new Date(),
    version: '1.0.0'
};

const response = HttpResponseBuilder.ok<UserDTO>()
    .setData(user)
    .setMetadata(metadata)
    .build();
```

## Predefined Status Codes

The builder includes methods for common HTTP status codes:

- `HttpResponseBuilder.ok()`
- `HttpResponseBuilder.created()`
- `HttpResponseBuilder.badRequest()`
- `HttpResponseBuilder.unauthorized()`
- `HttpResponseBuilder.forbidden()`
- `HttpResponseBuilder.notFound()`
- `HttpResponseBuilder.internalServerError()`
  And many more...

## Custom Response

You can create a custom response with any status code:

```typescript
const response = HttpResponseBuilder.customResponse<UserDTO>()
    .setStatus(418)  // I'm a teapot
    .setMessage("Custom message")
    .setData(user)
    .build();
```

## Response Type Structure

The response object has the following structure:

```typescript
{
    status: number;      // HTTP status code
    message: string;     // Status message
    data?: T;           // Response data (generic type)
    paging?: {          // Optional pagination info
        page: number;
        size: number;
        total: number;
    };
    metadata?: Record<string, any>;  // Optional additional metadata
}
```

## Error Handling

The builder includes validation and will throw TypeError for invalid inputs:

- Invalid status codes (must be between 100 and 599)
- Invalid message types (must be string)
- Invalid paging instance
- Invalid metadata type (must be object)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License